import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { PopupButton } from '@typeform/embed-react'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
export default function Hero() {
    return (
        <div>
            <div className="relative overflow-hidden">


                <div >
                    <img
                        className="h-8 m-6 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                    />
                </div>



                <main>
                    <div className="pt-10 bg-gray-50 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                        <div className="mx-auto max-w-7xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                    <div className="lg:py-24">
                                        <PopupButton id="zeCXyEqj" style={{ padding: 12, fontSize: 16 }} size={80}>
                                            <p
                                                href="#"
                                                className=" cursor-pointer inline-flex items-center text-black bg-gray-100 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-blue-500"
                                            >
                                                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-500 rounded-full">
                                                    se parte de Niurons
                                                </span>
                                                <span className="ml-4 text-sm ">ir al registro</span>
                                                <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                                            </p>
                                            |</PopupButton>





                                        <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                            <span className="block">Servicios freelance</span>
                                            <span className="block text-blue-500">para tu negocio</span>
                                        </h1>
                                        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                            Servicios de calidad, directamente con los mejores creativos de la industria. Desde hacer un flyer hasta un branding completo.
                                        </p>

                                    </div>
                                </div>
                                <div className="mt-12 lg:m-0 lg:relative">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                        <img
                                            className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                            src="img/portada.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </div>
    )
}











