import React from 'react'
import FAQItem from './FAQItem'

const SectionFive = () => {
    return (
        <section className="max-w-[1240px] m-auto py-[5rem]  flex flex-col items-center justify-center px-5 md:px-0 faq">
            <h2 className="font-robMedium text-center text-3xl faq">
                Frequently Asked Questions
            </h2>
            <div className="pt-10 flex flex-col gap-5">
                <FAQItem
                    title="What makes Reshiito a must-have for managing receipts and financial documents?"
                    description="Imagine having a personal assistant dedicated solely to organizing your receipts and financial documents - that's Reshiito. Our application is a powerhouse of efficiency, offering a robust suite of features including multi-tenancy capabilities, role-based access controls, and automated claims processing. It's designed to turn the chaos of receipt management into a streamlined, stress-free process."
                />
                <FAQItem
                    title="What is Reshiito and how does it streamline receipt management?"
                    description="Reshiito is a cutting-edge, multi-tenancy application designed to revolutionize the way businesses capture, manage, and delegate receipts. Our platform offers seamless integration of role-based access, claims management, and receipt delegation, ensuring that your financial documentation is organized and accessible anytime, anywhere."
                />
                <FAQItem
                    title="Who has access to my receipts?"
                    description="Control rests entirely in your hands. Our role-based access feature lets you define who can view, edit, or manage receipts within your organization, ensuring that sensitive financial information is shared responsibly."
                />
                <FAQItem
                    title="What is receipt delegation, and how can it benefit my team?"
                    description="Receipt delegation allows users to assign receipt management tasks to others within their organization. This feature is particularly useful for delegating responsibilities, ensuring timely expense reporting and approval without bottlenecking the workflow."
                />
            </div>
        </section>
    )
}

export default SectionFive


// import React from 'react'
// import Accordion from './Accordion'

// const SectionFive = () => {
//     return (
//         <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-md">
//             <Accordion
//                 title="Accordion Item 1"
//                 content="This is the content for the first accordion item."
//             />
//             <Accordion
//                 title="Accordion Item 2"
//                 content="This is the content for the second accordion item."
//             />
//             <Accordion
//                 title="Accordion Item 3"
//                 content="This is the content for the third accordion item."
//             />
//         </div>
//     )
// }

// export default SectionFive

