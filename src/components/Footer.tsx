import Link from 'next/link';
import { FaGithub, FaWeibo, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">关于“打破偏见”</h3>
            <p className="text-gray-400 max-w-md">
              一个致力于通过真实的故事、数据和行动呼吁，消除性别偏见，为一个更公平、更多元的未来而努力的公益项目。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">关于我们</Link></li>
              <li><Link href="/stories" className="text-gray-400 hover:text-white transition-colors">故事墙</Link></li>
              <li><Link href="/action" className="text-gray-400 hover:text-white transition-colors">参与行动</Link></li>
              <li><Link href="/problem" className="text-gray-400 hover:text-white transition-colors">看见“偏爱”</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <div className="flex space-x-4">
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors"><FaEnvelope size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaWeibo size={24} /></a>
            </div>
          </div>

        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} 打破偏见 (BiasBreakers). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
