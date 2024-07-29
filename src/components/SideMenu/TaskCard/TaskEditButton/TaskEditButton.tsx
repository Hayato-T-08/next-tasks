import React from "react";
import Link from "next/link";
import { FaPen } from 'react-icons/fa';
interface TaskEditBUttonProps{
    id: string;
}

const TaskEditButton: React.FC<TaskEditBUttonProps> = ({id}) => {
  return (
    <Link href={`/edit/${id}`} >
    <FaPen className='hover:text-gray-700 text-lg cursor-pointer' />
    </Link>
  )
}

export default TaskEditButton