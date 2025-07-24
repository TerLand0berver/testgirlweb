import Link from 'next/link';
import Image from 'next/image';
import { FaBalanceScale, FaVenus, FaMars, FaQuestionCircle, FaHandshake } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white py-20 px-4">
        <h1 className="text-5xl font-extrabold mb-4">打破无声的偏爱</h1>
        <p className="text-xl mb-8 max-w-2xl">每一个生命都值得被看见和珍视。我们致力于消除性别偏见，为一个更公平的世界而努力。</p>
        <div className="space-x-4">
          <Link href="/problem" className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">深入了解</Link>
          <Link href="/action" className="bg-transparent border-2 border-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300">立即行动</Link>
        </div>
      </section>

      {/* Introduction Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">探索问题的多个维度</h2>
            <p className="text-gray-600 mt-2">从个人故事到宏观数据，从心理认知到社会行动，我们提供全面的视角。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-2">看见“偏爱”</h3>
              <p className="text-gray-600">在家庭、职场、校园等场景中，聆听被忽视的声音，感受真实的故事。</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-2">数据警示</h3>
              <p className="text-gray-600">用直观的数据和图表，揭示性别不平等造成的真实、可量化的影响。</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-2">理解与改变</h3>
              <p className="text-gray-600">学习识别无意识偏见，并找到在日常生活中推动积极改变的有效方法。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Snapshot Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">数据快照：现实不容忽视</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-gray-700 text-xl">完全消除全球性别差距，还需要</p>
                    <p className="text-7xl font-bold text-purple-600 my-2">134 <span className="text-4xl">年</span></p>
                    <p className="text-gray-500">—— 世界经济论坛《2024年全球性别差距报告》</p>
                </div>
                <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-gray-700 text-xl">女性平均每日无偿照料工作时间</p>
                    <div className="flex justify-center items-center space-x-8 my-2">
                        <div className="flex items-center text-pink-500"><FaVenus className="mr-2"/> <span className="text-5xl font-bold">4.4</span><span className="mt-3 ml-1">小时</span></div>
                        <div className="flex items-center text-blue-500"><FaMars className="mr-2"/> <span className="text-5xl font-bold">2.3</span><span className="mt-3 ml-1">小时</span></div>
                    </div>
                    <p className="text-gray-500">—— OECD 国家平均水平</p>
                </div>
            </div>
            <div className="text-center mt-8">
                <Link href="/reality" className="text-purple-600 font-semibold hover:underline">查看更详细的数据分析 &rarr;</Link>
            </div>
        </div>
      </section>

      {/* How to Drive Change Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">改变的起点</h2>
                <p className="text-gray-600 mt-2">改变，从认识自我和支持他人开始。</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg flex items-center space-x-6">
                    <FaQuestionCircle className="text-5xl text-purple-500 flex-shrink-0"/>
                    <div>
                        <h3 className="text-2xl font-bold">挑战你的无意识偏见</h3>
                        <p className="text-gray-700 mt-2">通过一个简单的思考练习，观察自己未经审视的想法，迈出自我认知的第一步。</p>
                        <Link href="/change" className="text-purple-600 font-semibold hover:underline mt-2 inline-block">开始思考练习 &rarr;</Link>
                    </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg flex items-center space-x-6">
                    <FaHandshake className="text-5xl text-purple-500 flex-shrink-0"/>
                    <div>
                        <h3 className="text-2xl font-bold">成为有力的盟友</h3>
                        <p className="text-gray-700 mt-2">无论你的性别是什么，都可以通过倾听、发声和分担，成为推动平等的重要力量。</p>
                        <Link href="/change#ally" className="text-purple-600 font-semibold hover:underline mt-2 inline-block">学习如何成为盟友 &rarr;</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Legal Shield Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">法律之盾：了解你的权益</h2>
          <p className="mt-4 text-lg text-gray-300">法律是保障平等的重要工具。面对就业歧视、家庭暴力，你并非孤立无援。</p>
          <div className="mt-8">
              <Link href="/action" className="bg-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-purple-600 transition duration-300">了解法律详情与求助资源</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
