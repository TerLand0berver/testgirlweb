import { FaVenus, FaMars, FaHourglassHalf, FaFlask, FaCode, FaCog, FaMicroscope } from 'react-icons/fa';

const RealityPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Page Header */}
      <header 
        className="relative bg-cover bg-center py-20 text-white"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold">数据警示</h1>
          <p className="mt-4 text-lg">冰冷的数字背后，是亟待解决的社会问题。正视现实，是改变的第一步。</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Section 1: Global Gender Gap */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">全球性别差距：仍需134年</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  根据世界经济论坛《2024年全球性别差距报告》，全球性别平等状况已达到 <span className="font-bold text-purple-600">68.5%</span>。然而，按照目前的速度，完全消除性别差距，仍需 <span className="font-bold text-purple-600">134年</span>之久。
                </p>
                <p className="text-lg text-gray-700">
                  其中，<span className="font-bold text-red-500">政治赋权</span> 方面的差距最大，仅弥合了 <span className="font-bold text-red-500">22.5%</span>，是实现性别平等最主要的挑战之一。
                </p>
              </div>
              {/* Donut Chart Simulation */}
              <div className="flex justify-center items-center">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                    <path className="text-purple-600" strokeDasharray="68.5, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-purple-600">68.5%</span>
                    <span className="text-sm text-gray-500">已弥合</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Women in STEM */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">科技领域的“她”力量</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">在代表未来的科学、技术、工程和数学（STEM）领域，女性的代表性依然不足。以下数据揭示了这一现状。</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-5xl font-bold text-blue-600">~26%</h3>
                <p className="mt-2 text-lg font-semibold">工程领域</p>
                <p className="text-gray-600">在英国，女性仅占工程劳动力的约26%，这一比例在许多国家都相似。</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-5xl font-bold text-blue-600">~35%</h3>
                <p className="mt-2 text-lg font-semibold">STEM毕业生</p>
                <p className="text-gray-600">全球范围内，女性在STEM领域的毕业生中约占35%，源头上的不平等影响深远。</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-5xl font-bold text-blue-600">-16%</h3>
                <p className="mt-2 text-lg font-semibold">薪酬差距</p>
                <p className="text-gray-600">在英国的STEM行业，女性的平均薪酬比男性低16%，存在明显的同工不同酬现象。</p>
              </div>
            </div>
          </section>

          {/* Section 3: Unpaid Care Work */}
          <section className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6 sm:mb-8">看不见的劳动：无偿照料工作</h2>
            <p className="text-center text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">家务、育儿、照顾老人...这些无偿工作是社会运转的基石，但其负担却不成比例地落在女性肩上。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="p-6 bg-pink-100 rounded-lg text-center">
                <FaVenus className="text-pink-500 text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold">女性</h3>
                <p className="text-5xl font-bold text-pink-500 mt-2">4.4 <span className="text-2xl">小时/天</span></p>
                <p className="text-gray-600 mt-2">（OECD国家平均）</p>
              </div>
              <div className="p-6 bg-blue-100 rounded-lg text-center">
                <FaMars className="text-blue-500 text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold">男性</h3>
                <p className="text-5xl font-bold text-blue-500 mt-2">2.3 <span className="text-2xl">小时/天</span></p>
                <p className="text-gray-600 mt-2">（OECD国家平均）</p>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6 italic">这意味着，女性每天要比男性多承担近一倍的“第二轮班”，这极大地影响了她们的职业发展、个人休息和经济独立。</p>
          </section>

        </div>
      </main>
    </div>
  );
};

export default RealityPage;
