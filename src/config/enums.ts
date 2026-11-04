export enum CouponType {
  PERCENTAGE = "percentage",
  FIXED = "fixed",
}

export enum ProjectType {
  RESIDENTIAL = "Residential",
  COMMERCIAL = "Commercial",
  MIXED_USE = "Mixed Use",
}

export enum ProjectStatus {
  ONGOING = "Ongoing",
  COMPLETED = "Completed",
  UPCOMING = "Upcoming",
}

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  BANNED = "banned",
}

export enum ReservationStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  CANCELLED = "cancelled",
  EXPIRED = "expired",
}

export enum PropertyStatus {
  AVAILABLE = "available",
  RESERVED = "reserved",
  SOLD = "sold",
  UNAVAILABLE = "unavailable",
}

export enum ConstructionStatus {
  NOT_STARTED = "not_started",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  ON_HOLD = "on_hold",
}

export enum FurnishStatus {
  UNFURNISHED = "unfurnished",
  SEMI_FURNISHED = "semi_furnished",
  FULLY_FURNISHED = "fully_furnished",
}

export enum FinishingStatus {
  BASIC = "basic",
  STANDARD = "standard",
  PREMIUM = "premium",
  LUXURY = "luxury",
}

export enum MeetingRequestStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  COMPLETED = "completed",
}