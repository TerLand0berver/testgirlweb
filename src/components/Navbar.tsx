import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">打破偏见</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">首页</Link>
              <Link href="/problem" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">看见“偏爱”</Link>
              <Link href="/reality" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">数据警示</Link>
              <Link href="/change" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">理解与改变</Link>
              <Link href="/action" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">行动与呼吁</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
