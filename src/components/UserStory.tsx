import Image from 'next/image'

const brand = process.env.NEXT_PUBLIC_BRAND ?? 'segmental'

export default function UserStory() {
  return (
    <section id="user-story" className="user-story bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12 fade-in-up">
          <h2 className="text-3xl font-bold text-white">Customer Case Study</h2>
          <p className="text-gray-300 mt-2">Unlocking Intelligent Document Processing with {brand === 'segmental' ? 'Segmental' : 'Codifii'}</p>
        </div>

        <div className="user-story-card mb-12 fade-in-up">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <h4 className="font-bold text-lg text-white mb-2">Customer</h4>
                    <p className="text-gray-300">A Financial Service Company</p>
                </div>
                <div>
                    <h4 className="font-bold text-lg text-white mb-2">Industry</h4>
                    <p className="text-gray-300">Financial Services</p>
                </div>
                <div>
                    <h4 className="font-bold text-lg text-white mb-2">Challenge</h4>
                    <p className="text-gray-300">Manual processing, low accuracy, and poor scalability.</p>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
            <p className="text-gray-300 leading-relaxed">
              A leading financial services provider was facing significant inefficiencies in handling unstructured data across critical workflows. Their legacy systems struggled to process a high volume of complex documents, such as financial reports, legal filings, and customer records. Manual review cycles introduced costly delays, and existing AI models delivered inconsistent accuracy, resulting in downstream errors and compliance risks.
              <br/><br/>
              The company sought a robust AI-driven solution capable of transforming unstructured documents into structured, actionable intelligence—at scale, with high accuracy, and full enterprise-grade observability.
            </p>
          </div>
          <div className="fade-in-up delay-1">
            <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" alt="Stressed person at office desk" width={600} height={400} className="rounded-lg shadow-lg"/>
          </div>
        </div>

        <div className="user-story-card text-white mb-16 fade-in-up">
          <h3 className="text-2xl font-bold text-center mb-8">The Solution: {brand === 'segmental' ? 'Segmental' : 'Codifii'}&apos;s Smart Data Indexing on Azure Foundry</h3>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
            {brand === 'segmental' ? 'Segmental' : 'Codifii'} deployed its proprietary Smart Data Indexing engine on top of Azure Foundry, creating a powerful orchestration layer that integrates with key Azure services.
          </p>
          <div className="azure-services-container">
              <div className="azure-service-item">
                  <Image src="/images/azure-openai.png" alt="Azure OpenAI" width={64} height={64} className="mb-2"/>
                  <span className="text-gray-300">Azure OpenAI</span>
              </div>
              <div className="azure-service-item">
                  <Image src="/images/azure-storage.png" alt="Azure Storage" width={64} height={64} className="mb-2"/>
                  <span className="text-gray-300">Azure Storage</span>
              </div>
              <div className="azure-service-item">
                  <Image src="/images/azure-document.png" alt="Azure Postgres" width={64} height={64} className="mb-2"/>
                  <span className="text-gray-300">Azure Postgres</span>
              </div>
              <div className="azure-service-item">
                  <Image src="/images/azure-kubernetes.png" alt="Azure Monitoring" width={64} height={64} className="mb-2"/>
                  <span className="text-gray-300">Azure Monitoring</span>
              </div>
          </div>
        </div>

        <div className="fade-in-up mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">The Outcome</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="stat-card text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                    <p className="text-gray-300">Accuracy in data extraction</p>
                </div>
                <div className="stat-card text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
                    <p className="text-gray-300">Reduction in processing time</p>
                </div>
                <div className="stat-card text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">70%</div>
                    <p className="text-gray-300">Lowered manual review</p>
                </div>
            </div>
        </div>

        <div className="user-story-card fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Why {brand === 'segmental' ? 'Segmental' : 'Codifii'}</h3>
            <ul className="space-y-4 max-w-2xl mx-auto">
                <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-400 mr-3 mt-1"></i>
                    <p className="text-gray-300">Seamless integration with the Azure ecosystem</p>
                </li>
                <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-400 mr-3 mt-1"></i>
                    <p className="text-gray-300">Proprietary data indexing technology that understands document structure</p>
                </li>
                <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-400 mr-3 mt-1"></i>
                    <p className="text-gray-300">Orchestrated, agent-based framework for end-to-end automation</p>
                </li>
                <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-400 mr-3 mt-1"></i>
                    <p className="text-gray-300">Proven enterprise reliability and monitoring</p>
                </li>
            </ul>
        </div>

      </div>
    </section>
  )
} 