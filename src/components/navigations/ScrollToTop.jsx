import { useEffect, useState } from 'react'
import ChevronUpIcon from '@heroicons/react/24/outline/ChevronUpIcon'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div className="fixed bottom-6 right-6">
            <button
                type="button"
                onClick={scrollToTop}
                className={`${isVisible ? 'opacity-100' : 'opacity-0'} bg-dimGreen hover:bg-dimGreen inline-flex items-center rounded-md p-3 text-white shadow-sm transition-opacity ease-in-out`}
            >
                <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    )
}

export default ScrollToTop