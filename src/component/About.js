import React from 'react'

export default function About() {

    const RedirectToMail=()=>{
        window.location.href = "mailto:harshpatil61541@gmail.com"
    }

    return (
        <div>
            
               <h2>Welcome to I-NoteBook ✅!</h2><br/>

                At I-NoteBook, we believe in the power of organized and personalized note-taking. We understand that everyone has unique thoughts, ideas, and information that they want to capture and access conveniently. That's why we created this platform — to provide you with a seamless and secure way to store and access your notes, tailored specifically to your needs.<br/><br/>

                Our mission is to empower individuals like you to stay organized, productive, and inspired. We believe that by providing a user-friendly interface and robust features, we can help you streamline your note-taking process and unlock your full potential.<br/><br/><hr/>

                <h3>Key Features:</h3><br/>

                <b>1.</b> Personalized Note Storage: Our platform allows you to create and store notes in a secure and private space. Each user has their own dedicated area where they can effortlessly organize their thoughts, tasks, and important information.<br/><br/>

                <b>2.</b>Easy Accessibility: We understand the importance of being able to access your notes anytime, anywhere. Whether you're using your computer, smartphone, or tablet, our website is fully responsive, ensuring a consistent and user-friendly experience across all devices.<br/><br/>

                <b>3.</b>Customization Options: We believe that your note-taking experience should reflect your unique style and preferences. That's why we provide customization options, allowing you to personalize the appearance of your notes and create an environment that inspires you.<br/><br/>

                <b>4.</b>Privacy and Security: We prioritize the privacy and security of your data. Your notes are stored securely, and we employ industry-standard encryption protocols to ensure that your information remains confidential and protected.<br/><br/>

                We are a passionate team of developers who are committed to continuously improving and expanding our platform. We value your feedback and suggestions, as they help us enhance the user experience and add new features that truly meet your needs.<br/><br/>

                Thank you for choosing I-NoteBook as your trusted note-taking companion. We're excited to be a part of your journey towards greater organization, productivity, and success.<br/><br/>

                If you have any questions or need assistance, please don't hesitate to reach out to our support team. Happy note-taking!"<br/><br/>
                
                <button type="submit" onClick={RedirectToMail} className="btn btn-primary" >contact us</button>
            
        </div>
    )
}
