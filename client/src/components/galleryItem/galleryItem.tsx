import { Button } from '@mui/material';
import React from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { GalleryItemProps } from '../gallery/types';
import Image from '../image/image';

export default function GalleryItem(props: GalleryItemProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className='flex relative' style={{ gridRowEnd: `span ${Math.ceil(props.height / 100)}` }} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <Image media={props.media} h='300' w='300' className={"object-cover rounded-2xl"}/>
            {isOpen && <div className='absolute bottom-0 w-full h-full p-2 rounded-2xl hover:bg-black/50' >
                <div className='h-full flex flex-col justify-between items-end p-2'>
                    <Button
                        className='!bg-[#e60023] hover:!bg-[#b60000] !text-amber-50 !rounded-full !px-4 !py-2 !font-semibold '
                    >
                        Save
                    </Button>
                    <div className='space-x-1'>
                        <FileUploadOutlinedIcon className='hover:bg-gray-300 bg-white rounded-full !w-9 !h-9 p-2' />
                        <MoreHorizOutlinedIcon className='hover:bg-gray-300 bg-white rounded-full !w-9 !h-9 p-2' />
                    </div>
                </div>
            </div>}
        </div>
    )
}
