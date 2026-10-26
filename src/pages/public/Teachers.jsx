import { useState, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { teachersApi } from '@/shared/services/api/teachersApi'
import { fetchCountries, sortCountries } from '@/shared/utils/countryUtils'
import TeachersHero from './components/Teachers/TeachersHero'
import TeachersFilterBar from './components/Teachers/TeachersFilterBar'
import TeachersGrid from './components/Teachers/TeachersGrid'
import TeachersPagination from './components/Teachers/TeachersPagination'
import { extractTeacherSubjects, matchesTeacherCountry } from './components/Teachers/teachersUtils'

const ITEMS_PER_PAGE = 10

export default function Teachers() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language === 'ar'
  const gridRef = useRef(null)

  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const {
    data: teachersResponse,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['publicTeachers', searchTerm],
    queryFn: () => teachersApi.fetchPublicTeachers({
      page: 1,
      limit: 100,
      search: searchTerm
    }),
    placeholderData: (previousData) => previousData,
  })

  const { data: rawCountries = [] } = useQuery({
    queryKey: ['countries', i18n.language],
    queryFn: () => fetchCountries({ sort: 'name' }),
    staleTime: 1000 * 60 * 10,
  })

  const countriesList = useMemo(() => {
    return sortCountries(rawCountries, isRtl)
  }, [rawCountries, isRtl])

  const rawTeachers = useMemo(() => {
    return Array.isArray(teachersResponse?.data) ? teachersResponse.data : []
  }, [teachersResponse])

  const availableSubjects = useMemo(() => {
    return extractTeacherSubjects(rawTeachers)
  }, [rawTeachers])

  const filteredTeachers = useMemo(() => {
    return rawTeachers.filter((teacher) => {
      if (selectedSubject) {
        const hasSpec = Array.isArray(teacher.specializations) &&
          teacher.specializations.some((s) => {
            const name = typeof s === 'object' && s !== null ? s.name : s
            return name === selectedSubject
          })
        const matchesSubject = teacher.subject === selectedSubject
        if (!hasSpec && !matchesSubject) return false
      }
      if (selectedCountry && !matchesTeacherCountry(teacher, selectedCountry, countriesList)) {
        return false
      }
      return true
    })
  }, [rawTeachers, selectedSubject, selectedCountry, countriesList])

  const totalPages = Math.max(1, Math.ceil(filteredTeachers.length / ITEMS_PER_PAGE))

  const paginatedTeachers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredTeachers.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredTeachers, currentPage])

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault()
    setSearchTerm(searchInput.trim())
    setCurrentPage(1)
  }

  const handleResetFilters = () => {
    setSearchInput('')
    setSearchTerm('')
    setSelectedSubject('')
    setSelectedCountry('')
    setCurrentPage(1)
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
      setCurrentPage(newPage)
      if (gridRef.current) {
        gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const hasActiveFilters = Boolean(searchTerm || selectedSubject || selectedCountry)

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 pb-20">
      <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto space-y-16">
        <TeachersHero isRtl={isRtl} />

        <TeachersFilterBar
          searchInput={searchInput}
          onSearchInputChange={setSearchInput}
          onSearchSubmit={handleSearchSubmit}
          selectedSubject={selectedSubject}
          onSelectSubject={(subject) => {
            setSelectedSubject(subject)
            setCurrentPage(1)
          }}
          availableSubjects={availableSubjects}
          selectedCountry={selectedCountry}
          onSelectCountry={(country) => {
            setSelectedCountry(country)
            setCurrentPage(1)
          }}
          countriesList={countriesList}
          isRtl={isRtl}
          onResetFilters={handleResetFilters}
        />

        <section ref={gridRef}>
          <TeachersGrid
            isError={isError}
            isLoading={isLoading}
            filteredTeachers={filteredTeachers}
            paginatedTeachers={paginatedTeachers}
            onRetry={refetch}
            onResetFilters={handleResetFilters}
            hasActiveFilters={hasActiveFilters}
            t={t}
          />
        </section>

        <TeachersPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isRtl={isRtl}
          t={t}
        />
      </div>
    </div>
  )
}