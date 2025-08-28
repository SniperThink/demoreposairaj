'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPage() {
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

        {/* Privacy Policy Content */}
        <div className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <p className="mb-6">
            <strong>Effective Date:</strong> <em className="text-gray-300">August 19, 2025</em>
          </p>

          <p className="mb-6">
            The given privacy policy ("Privacy Policy") is to be read in conjunction with the Terms of Use as displayed on Our Platform/Website and establishes a legally binding agreement between the User and SniperThink ("The Company").
          </p>

          <p className="mb-6">
            Any reference in the form of "we", "us" and "our" would hereinafter refer to the Company. Any person who accesses or uses the Platform/Website shall be termed as the "User", any reference to "You", "Their", "Them" shall hereinafter refer to the User.
          </p>

          <p className="mb-6">
            Your access and/or usage of the Platform/Website indicates that you have read, understood and agreed in full to this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">What Personal Information May Be Collected</h2>
          <p className="mb-4">
            In the course of providing services, the Company may have to collect certain Personal Information from you. This information would include the following:
          </p>

          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>
              <strong>Personal Details:</strong> The Company may collect personal details including but not limited to name and age.
            </li>
            <li>
              <strong>Contact information:</strong> The Company may collect any contact information from You including but not limited to your address, email and telephone number.
            </li>
            <li>
              <strong>Information to provide the services:</strong> The Company may collect information such as objective of procuring the services, event for which services are required etc.
            </li>
            <li>
              <strong>Social-Media related Information:</strong> Information related to your social media profiles including but not limited to the username and content posted may be collected
            </li>
            <li>
              <strong>Financial Information:</strong> Financial Information such as any third-party wallets, credit card information and history of transactions carried out on the Platform may be collected.
            </li>
            <li>
              <strong>Other information:</strong> We may also collect information about the IP address and the browser you are using.
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-4">How does the Company collect the Personal Information</h2>
          
          <ol className="list-decimal pl-6 mb-6 space-y-4">
            <li>
              <strong className="underline">Personal Information provided to the Company</strong>
              <p className="mt-2 ml-6">
                We may ask for Your Personal Information including but not limited to your full name, contact details and birth date at the time of Your registration on the Platform/Website.
              </p>
            </li>
            <li>
              <strong className="underline">Personal Information collected automatically</strong>
              <p className="mt-2 ml-6">
                Some data such as your browser type, internet protocol address used, your usage patterns may be automatically collected by the Company using cookies.
              </p>
            </li>
            <li>
              <strong className="underline">Information we may receive from third parties:</strong>
              <p className="mt-2 ml-6">
                We may receive information about you from third parties, such as through your social media accounts when you connect them to our services.
              </p>
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Verifying your identity and personalizing your experience</li>
            <li>Providing and improving our services</li>
            <li>Communicating with you about our services</li>
            <li>Analyzing and optimizing service performance</li>
            <li>Marketing and promotional communications</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Data Security</h2>
          <p className="mb-6">
            We protect your information through:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Physical and technical security measures</li>
            <li>Confidentiality agreements with third parties</li>
            <li>Compliance with applicable laws and regulations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Access and receive a copy of your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy or our practices, please contact us at:
            <br />
            Email: privacy@sniperthink.com
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-white/80 hover:text-white">
              Back to Home
            </Link>
            <Link href="/terms" className="text-white/80 hover:text-white">
              Terms and Conditions
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
