const footerLinks = [
    {
      title: 'Tools',
      links: ['Create', 'Publish', 'Engage', 'Analyze', 'Collaborate'],
    },
    {
      title: 'Features',
      links: ['AI Assistant', 'Start Page', 'Integrations', 'iOS App', 'Android App', 'Browser Extension'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Content Library', 'Social Media Terms Glossary', 'Free Marketing Tools', 'AI Social Media Post Generator', 'Compare Buffer', 'Community'],
    },
    {
      title: 'Transparency',
      links: ['Open Hub', 'Transparent Metrics', 'Transparent Pricing', 'Transparent Salaries', 'Product Roadmap'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Status', 'What’s New', 'Request a Feature'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Press', 'Legal', 'Sitemap'],
    },
  ];
  

export default function Links() {
  return (
    <div>
          <div className="bg-gray-900 text-white py-10 px-4">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}



