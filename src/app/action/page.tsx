'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaRegEdit, FaShareAlt, FaLink, FaEnvelope } from 'react-icons/fa';

const ActionPage = () => {
  const [story, setStory] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ story, email });
    setSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('我正在关注一个旨在消除性别偏见的网站，它通过真实的故事和数据，揭示了“重男轻女”和“隐形偏爱”的问题。推荐你也来看看，让我们一起为更公平的未来努力！ #打破偏见 #性别平等');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <header className="relative py-20">
        <Image 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
          alt="A diverse group of people working together" 
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">行动与呼吁</h1>
          <p className="mt-4 text-lg text-gray-800 font-semibold">微小的行动，汇聚成改变的洪流。你的参与至关重要。</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Column: Action Cards */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <FaRegEdit className="text-purple-500 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-bold text-xl">分享你的故事</h2>
                  <p className="text-gray-700 mt-1">你的经历有力量。通过下方表单匿名分享你的故事，可以帮助更多人看见“偏爱”的存在，打破沉默。我们保证所有分享都将严格保密。</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <FaShareAlt className="text-purple-500 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-bold text-xl">成为倡导者</h2>
                  <p className="text-gray-700 mt-1">将这个网站分享到你的社交媒体，与你的朋友、家人和同事讨论这个话题。点击下方按钮，即可复制一段预设的分享文案。</p>
                  <button 
                    onClick={handleCopy}
                    className="mt-3 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                    {copied ? '已复制！' : '复制分享文案'}
                  </button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <FaLink className="text-purple-500 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-bold text-xl">关注相关组织</h2>
                  <p className="text-gray-700 mt-1">我们推荐关注以下致力于推动性别平等的组织，获取更多信息和支持：</p>
                  <ul className="list-disc list-inside mt-2 text-blue-600 space-y-1">
                    <li><a href="https://www.unwomen.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">联合国妇女署</a></li>
                    <li><a href="https://www.girlsnotbrides.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Girls Not Brides</a></li>
                    <li><a href="http://www.woman.org.cn/" target="_blank" rel="noopener noreferrer" className="hover:underline">中华全国妇女联合会</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg sticky top-8">
              {submitted ? (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold mb-4 text-purple-600">感谢您的提交！</h2>
                  <p className="text-gray-700">您的声音对我们非常重要。感谢您为推动改变所做的贡献。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center"><FaEnvelope className="mr-3 text-purple-500"/> 加入我们</h2>
                  <div className="mb-6">
                    <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-2">分享你的故事（匿名，选填）</label>
                    <textarea 
                      id="story" 
                      rows={6}
                      value={story}
                      onChange={(e) => setStory(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition"
                      placeholder="在这里分享你的经历、观察或感受..."
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">订阅我们的邮件通讯（选填）</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition"
                      placeholder="your.email@example.com"
                    />
                    <p className="text-xs text-gray-500 mt-1">接收项目更新和活动通知，我们承诺不发送垃圾邮件。</p>
                  </div>
                  <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition duration-300">提交</button>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ActionPage;
