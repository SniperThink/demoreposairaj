'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0F0F11] text-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/img/logo.svg"
              alt="SniperThink Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Terms Content */}
        <div className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
          
          <p className="mb-6">
            These Terms of Use (the "Terms") constitute a legally binding agreement between you ("you," "your," or "User") and Grey Horizon Ventures Private Limited ("Company," "Sniperthink", "we," "us," or "our").
          </p>

          <p className="mb-6">
            By accessing or using our website/application (the "Site"/"App"), you agree to be bound by these Terms of Use and our Privacy Policy, which is published on this Site and is incorporated herein by reference. You further agree to comply with all applicable laws and regulations while using this Site.
          </p>

          <div className="bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="font-bold text-yellow-200">
              BY ACCESSING OR USING THIS WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF USE. IF YOU DO NOT AGREE TO THESE TERMS, YOU ARE NOT AUTHORIZED TO ACCESS OR USE THE WEBSITE.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">1. SCOPE AND APPLICABILITY</h2>
          <p className="mb-6">
            These Terms, together with our Privacy Policy, constitute the entire and sole agreement between you and the Company regarding your access to and use of this Site. For any questions about your use of the Site, please contact us at: hello@sniperthink.com.
          </p>

          <p className="mb-4">You are permitted to use the Site if you meet the following criteria:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">You are 18 years of age or older.</li>
            <li className="mb-2">You agree to comply with these Terms of Use and our Privacy Policy.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">2. LICENSE TO USE THE SITE</h2>
          <p className="mb-6">
            Subject to your compliance with these Terms, the Company grants you a worldwide, non-exclusive, non-transferable, non-sublicensable, revocable, limited license to access and use the information and services provided on the Site for your internal use.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">3. PROHIBITED USES</h2>
          <p className="mb-4">By accessing and using this Site, you agree that you will not:</p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Use the Site if you are under the age of 18.</li>
            <li>Use any content on the Site in a way that violates any applicable law.</li>
            <li>Use the Site in any manner that could adversely affect our systems.</li>
            <li>Interfere with any third party's use and enjoyment of the Site.</li>
            <li>Modify or alter any content available on the Site.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-4">4. INTELLECTUAL PROPERTY</h2>
          <p className="mb-6">
            All content, features, and functionality of the Site are the intellectual property of the Company. You agree not to modify, resell, reuse, license, distribute, or use our intellectual property in any unauthorized manner.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">5. DATA PROTECTION AND PRIVACY</h2>
          <p className="mb-6">
            You acknowledge that you have read and fully understood the terms of our Privacy Policy. Your use of the Site is subject to our Privacy Policy, which governs our collection and use of your information.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">6. LIMITATION OF LIABILITY</h2>
          <div className="bg-red-900/20 border-l-4 border-red-400 p-4 mb-8">
            <p className="text-red-200">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF THE SITE OR ITS CONTENT. OUR TOTAL CUMULATIVE LIABILITY SHALL NOT EXCEED INR 1000.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">7. GOVERNING LAW AND JURISDICTION</h2>
          <p className="mb-6">
            These Terms shall be governed by and construed in accordance with the laws of India. The courts located in Noida, UP shall have exclusive jurisdiction over any disputes arising from these Terms.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">8. CONTACT US</h2>
          <p className="mb-6">
            If you have any questions about these Terms of Use, please contact us at: hello@sniperthink.com
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-white/80 hover:text-white">
              Back to Home
            </Link>
            <Link href="/privacy" className="text-white/80 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
