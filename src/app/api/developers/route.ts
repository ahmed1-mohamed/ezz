import { NextRequest, NextResponse } from "next/server";
import { DeveloperDataType } from "@/types";
import { DASHBOARD_API_BASE_URL } from "@/config/api";

const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 10;
const MAX_PER_PAGE = 100;

interface PaginatedDevelopersResponse {
  status: boolean;
  message: string;
  total: number;
  data: DeveloperDataType[];
}

interface ErrorResponse {
  status: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
function validatePaginationParams(
  page: string | null,
  per_page: string | null,
): { validatedPage: number; validatedPerPage: number; errors: string[] } {
  const errors: string[] = [];
  let validatedPage = DEFAULT_PAGE;
  let validatedPerPage = DEFAULT_PER_PAGE;

  if (page !== null) {
    const pageNum = parseInt(page, 10);
    if (isNaN(pageNum)) {
      errors.push("Page must be a valid number");
    } else if (pageNum < 1) {
      errors.push("Page must be greater than 0");
    } else {
      validatedPage = pageNum;
    }
  }

  if (per_page !== null) {
    const perPageNum = parseInt(per_page, 10);
    if (isNaN(perPageNum)) {
      errors.push("Per page must be a valid number");
    } else if (perPageNum < 1) {
      errors.push("Per page must be greater than 0");
    } else if (perPageNum > MAX_PER_PAGE) {
      errors.push(`Per page cannot exceed ${MAX_PER_PAGE}`);
    } else {
      validatedPerPage = perPageNum;
    }
  }

  return { validatedPage, validatedPerPage, errors };
}
async function fetchDevelopersFromApi(
  page: number,
  per_page: number,
): Promise<{ data: DeveloperDataType[]; total: number } | null> {
  const apiUrl = DASHBOARD_API_BASE_URL;

  try {
    const response = await fetch(
      `${apiUrl}/developers?page=${page}&per_page=${per_page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "country-id": "1",
          "country_id": "1",
        },
      },
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch developers: HTTP ${response.status} ${response.statusText}`,
      );
      return null;
    }

    const responseData = await response.json();

    if (Array.isArray(responseData)) {
      return { data: responseData, total: responseData.length };
    }

    if (responseData.data && Array.isArray(responseData.data)) {
      return {
        data: responseData.data,
        total: responseData.total || responseData.data.length,
      };
    }

    if (responseData.developers && Array.isArray(responseData.developers)) {
      return {
        data: responseData.developers,
        total: responseData.total || responseData.developers.length,
      };
    }

    console.error("Unexpected response format from developers API");
    return null;
  } catch (error) {
    console.error("Error fetching developers from API:", error);
    return null;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const per_page = searchParams.get("per_page");

  const { validatedPage, validatedPerPage, errors } =
    validatePaginationParams(page, per_page);

  if (errors.length > 0) {
    const errorResponse: ErrorResponse = {
      status: false,
      message: "Invalid pagination parameters",
      errors: {
        parameters: errors,
      },
    };
    return NextResponse.json(errorResponse, { status: 400 });
  }

  try {
    const result = await fetchDevelopersFromApi(validatedPage, validatedPerPage);

    if (result === null) {
      const errorResponse: ErrorResponse = {
        status: false,
        message: "Failed to fetch developers from the server",
      };
      return NextResponse.json(errorResponse, { status: 500 });
    }

    const { data: developers, total } = result;

    const totalPages = Math.ceil(total / validatedPerPage);
    if (validatedPage > totalPages && total > 0) {
      const errorResponse: ErrorResponse = {
        status: false,
        message: `Page ${validatedPage} is beyond the available range. Total pages: ${totalPages}`,
      };
      return NextResponse.json(errorResponse, { status: 404 });
    }

    const successResponse: PaginatedDevelopersResponse = {
      status: true,
      message: "Developers fetched successfully",
      total,
      data: developers,
    };

    return NextResponse.json(successResponse, { status: 200 });
  } catch (error) {
    console.error("Unexpected error in GET /api/developers:", error);

    const errorResponse: ErrorResponse = {
      status: false,
      message: "An unexpected error occurred",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}