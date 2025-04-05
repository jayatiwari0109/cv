import Head from 'next/head';

export default function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <Head>
        <title>Jaya Tiwari - Resume</title>
      </Head>
      <main>
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Jaya Tiwari</h1>
          <p className="text-lg text-gray-500">SAP Hybris Technical Lead</p>
          <p className="text-sm text-gray-400">Bangalore, India | your.email@example.com | +91-XXXXXXXXXX</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Profile Summary</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>7+ years of experience in SAP Hybris Commerce development across B2B & B2C projects.</li>
            <li>Expert in Hybris modules: Catalog, Product, Checkout, Promotions, Cart, Order Management.</li>
            <li>Proficient in OCC APIs, custom extensions, impex scripting, and backoffice customization.</li>
            <li>Agile/Scrum team experience with strong cross-functional collaboration.</li>
            <li>Hands-on with Dynatrace, New Relic, Splunk, Redis Cache, and Apache Kafka.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Core Skills</h2>
          <ul className="grid grid-cols-2 gap-x-8 list-disc list-inside text-gray-700">
            <li>SAP Hybris (5.x – 2211)</li>
            <li>Backoffice & SmartEdit</li>
            <li>OCC / REST APIs</li>
            <li>Java, Spring Framework</li>
            <li>Impex & FlexibleSearch</li>
            <li>Agile, Scrum, Jira</li>
            <li>Dynatrace, Splunk, Kafka</li>
            <li>Redis, New Relic</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Professional Experience</h2>
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="mb-6">
              <h3 className="text-xl font-bold text-gray-800">Project {n} – [Company / Client Name]</h3>
              <p className="text-gray-600 italic">SAP Hybris Developer / Technical Lead | [MM/YYYY – MM/YYYY]</p>
              <p className="text-gray-700 mt-2">Project Description: [Brief overview of project, tech stack, domain]</p>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                <li>Developed custom extensions and OCC services for storefront and integrations.</li>
                <li>Collaborated with cross-functional teams in Agile sprints to deliver high-quality features.</li>
                <li>Monitored production issues and improved performance using Splunk and Redis caching.</li>
              </ul>
            </div>
          ))}
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Education</h2>
          <p className="text-gray-700">B.Tech in Computer Science – [University Name], [Year]</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>SAP Certified Development Associate – SAP Commerce Cloud</li>
          </ul>
        </section>
      </main>
    </div>
  );
}