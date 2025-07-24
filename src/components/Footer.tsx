const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} 打破偏见. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">一个致力于促进性别平等的公益项目</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
