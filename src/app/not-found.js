import Link from 'next/link'
import Image from 'next/image'
import notFoundImg from '@/assets/404.gif'

const notFound = () => {
    return (
        <div>
            <Image src={notFoundImg} alt='404' className='mx-auto'></Image>
        </div>
    );
};

export default notFound;