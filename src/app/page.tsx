import Link from 'next/link';
import Image from 'next/image';
import { FaBalanceScale, FaQuestionCircle, FaHandshake, FaArrowRight } from 'react-icons/fa';

// Sample stories for the featured section
const featuredStories = [
  {
    id: 1,
    category: '职场观察',
    title: '“你的计划里，有家庭吗？”',
    excerpt: '当我的男同事被问及职业规划时，面试官却微笑着问我，“你未来几年有组建家庭的计划吗？”',
    imageUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
  },
  {
    id: 2,
    category: '家庭生活',
    title: '我给儿子买了一套厨具玩具',
    excerpt: '亲戚看到后说：“怎么给男孩子买这个？” 我回答：“因为他的爸爸也会做饭啊。”',
    imageUrl: 'https://images.pexels.com/photos/4473864/pexels-photo-4473864.jpeg',
  },
  {
    id: 3,
    category: '教育反思',
    title: '“理科是男生的强项”',
    excerpt: '这句话我听了整个中学。这种无形的压力，让许多女孩在选择时，默默避开了她们本可以发光的领域。',
    imageUrl: 'https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center text-white py-20 px-4 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 opacity-90"></div>
        <div className="absolute inset-0">
          <Image 
            src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Diverse group of people"
            className="opacity-20"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">打破无声的偏爱</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">每一个生命都值得被看见和珍视。我们致力于消除性别偏见，为一个更公平的世界而努力。</p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
            <Link href="/problem" className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              了解问题
            </Link>
            <Link href="/action" className="bg-transparent border-2 border-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-purple-600 transition duration-300 transform hover:scale-105">
              立即行动
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">精选故事</h2>
            <p className="text-gray-600 mt-2">真实的声音，是改变的开始。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <div key={story.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative h-48 w-full">
                  <Image src={story.imageUrl} alt={story.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm font-semibold text-purple-600">{story.category}</p>
                  <h3 className="mt-2 text-lg font-bold text-gray-900 flex-grow">{story.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{story.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/stories" className="inline-flex items-center text-purple-600 font-semibold hover:underline">
              阅读所有故事 <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Data Snapshot Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">数据快照：现实不容忽视</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-gray-700 text-xl">完全消除全球性别差距，还需要</p>
                    <p className="text-7xl font-bold text-purple-600 my-2">134 <span className="text-4xl">年</span></p>
                    <p className="text-gray-500">—— 世界经济论坛《2024年全球性别差距报告》</p>
                </div>
                <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-gray-700 text-xl">女性日均无偿照料工作时间是男性的</p>
                    <p className="text-7xl font-bold text-purple-600 my-2">~2<span className="text-4xl">倍</span></p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-gray-50 p-8 rounded-lg flex items-center space-x-6 hover:shadow-xl transition-shadow">
                    <FaQuestionCircle className="text-5xl text-purple-500 flex-shrink-0"/>
                    <div>
                        <h3 className="text-2xl font-bold">挑战你的无意识偏见</h3>
                        <p className="text-gray-700 mt-2">通过一个简单的思考练习，观察自己未经审视的想法，迈出自我认知的第一步。</p>
                        <Link href="/change" className="text-purple-600 font-semibold hover:underline mt-2 inline-block">开始思考练习 &rarr;</Link>
                    </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg flex items-center space-x-6 hover:shadow-xl transition-shadow">
                    <FaHandshake className="text-5xl text-purple-500 flex-shrink-0"/>
                    <div>
                        <h3 className="text-2xl font-bold">成为有力的盟友</h3>
                        <p className="text-gray-700 mt-2">无论你的性别是什么，都可以通过倾听、发声和分担，成为推动平等的重要力量。</p>
                        <Link href="/change" className="text-purple-600 font-semibold hover:underline mt-2 inline-block">学习如何改变 &rarr;</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
