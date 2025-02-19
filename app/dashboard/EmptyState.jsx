import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function EmptyState() {
  return (
    <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dotted'>
        <h2>You do not have any video created</h2><br />
        <Link href={'/dashboard/create-new'}>
            <Button>Create Your First Short Video</Button>
        </Link>
    </div>
  )
}

export default EmptyState