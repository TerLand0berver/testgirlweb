'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaRegLightbulb, FaSearch, FaBalanceScale, FaUsers, FaHandshake } from 'react-icons/fa';

// A simple, non-scientific quiz to provoke thought
const quizQuestions = [
  {
    question: '当听到“CEO”这个词时，你脑海中浮现的第一个形象更倾向于哪种性别？',
    options: ['男性', '女性', '没有明显的性别特征'],
  },
  {
    question: '在一个家庭中，你认为谁更应该承担照顾孩子和家务的主要责任？',
    options: ['母亲', '父亲', '双方平等分担'],
  },
  {
    question: '你认为需要高强度体力的工作（如建筑工人）不适合女性吗？',
    options: ['是的，不适合', '不是，能力比性别更重要', '不确定'],
  },
];

const ChangePage = () => {
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, option: string) => {
    setAnswers({ ...answers, [questionIndex]: option });
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <header className="relative py-20 bg-gray-800">
        <Image 
          src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg" 
          alt="A person looking at a wall of ideas" 
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-extrabold">理解与改变</h1>
          <p className="mt-4 text-lg">真正的改变，始于自我认知和持续的努力。</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1: What is Unconscious Bias? */}
          <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">什么是无意识偏见？</h2>
            <p className="text-lg text-gray-700 mb-4">
              无意识偏见（或隐性偏见）是我们基于成长环境、社会文化和个人经历，在无意中形成的对某些群体的刻板印象。它像一个“自动驾驶”的思维程序，影响着我们的判断和决策，但我们自己却很难察觉。
            </p>
            <p className="text-lg text-gray-700">
              例如，我们可能会下意识地将某些职业、特质或角色与特定性别联系起来。承认这些偏见的存在，不是为了指责，而是为了有机会去审视和改变它。
            </p>
          </section>

          {/* Section 2: Interactive Quiz */}
          <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">一个简单的思考练习</h2>
            <div className="space-y-8">
              {quizQuestions.map((q, index) => (
                <div key={index}>
                  <p className="font-semibold text-lg mb-2">{index + 1}. {q.question}</p>
                  <div className="flex flex-col space-y-2">
                    {q.options.map(opt => (
                      <button 
                        key={opt} 
                        onClick={() => handleAnswer(index, opt)}
                        className={`p-3 rounded-lg text-left transition-colors ${answers[index] === opt ? 'bg-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button onClick={() => setShowResults(true)} className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-purple-700 transition duration-300">完成并查看反思</button>
            </div>
            {showResults && (
              <div className="mt-6 bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 rounded-r-lg">
                <p className="font-bold">反思一下：</p>
                <p>你的选择是否反映了社会普遍的刻板印象？这个练习的目的不是评分，而是帮助我们观察自己未经审视的、第一时间的想法。这就是无意识偏见可能在起作用的地方。</p>
              </div>
            )}
          </section>

          {/* Section 3: How to Change */}
          <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">我们可以做什么？</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaRegLightbulb className="text-purple-500 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl">放慢思考</h3>
                  <p className="text-gray-700">在做重要判断（如招聘、评价他人）时，有意识地给自己几秒钟，质疑第一印象。问问自己这个判断是基于事实，还是基于某个模糊的印象或感觉。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaSearch className="text-purple-500 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl">寻找反例</h3>
                  <p className="text-gray-700">主动关注和了解那些打破刻板印象的人和事，例如，杰出的女性科学家、体贴的男性护理者、在非传统领域发光的个体。这有助于拓宽我们的认知框架。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaBalanceScale className="text-purple-500 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl">使用客观标准</h3>
                  <p className="text-gray-700">在工作和生活中，尽可能用具体、客观、可衡量的标准来代替主观感受。例如，在评估工作表现时，关注完成了什么，而不是“感觉谁更可靠”。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaUsers className="text-purple-500 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl">保持开放对话</h3>
                  <p className="text-gray-700">与家人、朋友和同事温和地讨论这个话题，分享彼此的观察和感受。一个开放和尊重的对话环境是共同进步的基础。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Be an Ally */}
          <section className="bg-white p-8 rounded-lg shadow-md">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">成为有力的盟友</h2>
                    <p className="text-gray-700 mb-4">无论你的性别是什么，都可以成为推动性别平等的重要力量。盟友意味着在他人受到不公对待时，选择发声和支持，而不是沉默。</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>倾听：</strong>当女性分享她们的经历时，请耐心倾听并相信她们。</li>
                        <li><strong>放大声音：</strong>在会议中，如果女性的观点被忽视，可以主动引述并支持。</li>
                        <li><strong>挑战偏见：</strong>当听到性别歧视的笑话或言论时，温和而坚定地指出其不妥。</li>
                        <li><strong>分担责任：</strong>在家庭和工作中，主动分担无偿的照料和行政类工作。</li>
                    </ul>
                </div>
                <div className="h-80 w-full relative">
                    <Image src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg" alt="A diverse team collaborating" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default ChangePage;
