import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import ButtonPrimary from '../shared/Button/ButtonPrimary';

const Contact = () => {
    return (
        <section id="contact" className="bg-secondary py-16 text-tertiary mt-10">
            <div className='wrapper'>
                
                    <div className="flex flex-col items-center justify-center gap-4 mb-12">
                        <SectionTitle text='My Contact'/>
                        <h1 className="section-heading">I WANT TO HEAR FROM YOU</h1>
                    </div>
                    <div className="flex items-start justify-between gap-10">
                        <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border border-primary rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border border-primary rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Your phone"
                                    className="border border-primary rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="border border-primary rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <textarea
                                    placeholder="Message"
                                    className="md:col-span-2 border border-primary rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary"
                                ></textarea>
                                <ButtonPrimary>Send Message</ButtonPrimary>
                            </form>
                        </div>
                        <div className="w-full lg:w-1/3 flex flex-col justify-center gap-8">
                            <div className="flex items-start mb-6">
                                <div className="bg-primary p-3 rounded-full mr-4">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 2a10 10 0 0110 10v6a10 10 0 01-10 10A10 10 0 012 18v-6a10 10 0 0110-10z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-dark font-bold text-lg">Address</h3>
                                    <p>202 Dog Hill Lane Beloit, KS 67420</p>
                                </div>
                            </div>
                            <div className="flex items-start mb-6">
                                <div className="bg-primary p-3 rounded-full mr-4">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12h.01M19.1 16.09a6 6 0 11-2.12-2.12L20.9 17 19.1 16.1z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-dark font-bold text-lg">Phone</h3>
                                    <p>+01589634755</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-primary p-3 rounded-full mr-4">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 4h16v16H4V4z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-dark font-bold text-lg">Email</h3>
                                    <p>credesign@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        </section>
    );
};

export default Contact;
