import { useState, useMemo } from 'react'
import useDebounce from '@/shared/hooks/useDebounce'
import TeachersListHeader from './TeachersListHeader'
import TeachersListItem from './TeachersListItem'
import TeachersPagination from './TeachersPagination'

export default function TeachersList({
  teachers,
  selectedTeacherId,
  isRtl,
  t,
  onSelectTeacher,
  onOpenAddScreen,
  onOpenEditScreen,
  onViewDetails
}) {
  const [searchVal, setSearchVal] = useState('')
  const debouncedQuery = useDebounce(searchVal, 300)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const filteredTeachers = useMemo(() => {
    if (!debouncedQuery.trim()) return teachers
    const query = debouncedQuery.toLowerCase()
    return teachers.filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(query) ||
        teacher.subject.toLowerCase().includes(query) ||
        (teacher.email && teacher.email.toLowerCase().includes(query))
    )
  }, [teachers, debouncedQuery])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = useMemo(() => {
    return filteredTeachers.slice(indexOfFirstItem, indexOfLastItem)
  }, [filteredTeachers, indexOfFirstItem, indexOfLastItem])

  const totalPages = useMemo(() => {
    return Math.ceil(filteredTeachers.length / itemsPerPage)
  }, [filteredTeachers, itemsPerPage])

  const handleSearchChange = (val) => {
    setSearchVal(val)
    setCurrentPage(1)
  }

  return (
    <div className="space-y-6">
      <TeachersListHeader
        searchVal={searchVal}
        onSearchChange={handleSearchChange}
        onOpenAddScreen={onOpenAddScreen}
        isRtl={isRtl}
        t={t}
      />

      <div className="space-y-4">
        {currentItems.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-10 text-center text-slate-400 dark:text-slate-500 font-bold">
            {isRtl ? 'لا يوجد معلمون يطابقون بحثك' : 'No teachers found matching your search'}
          </div>
        ) : (
          currentItems.map((teacher) => (
            <TeachersListItem
              key={teacher.id}
              teacher={teacher}
              isSelected={selectedTeacherId === teacher.id}
              onSelectTeacher={onSelectTeacher}
              onViewDetails={onViewDetails}
              onOpenEditScreen={onOpenEditScreen}
              isRtl={isRtl}
              t={t}
            />
          ))
        )}
      </div>

      <TeachersPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        totalItems={filteredTeachers.length}
        isRtl={isRtl}
        t={t}
      />
    </div>
  )
}