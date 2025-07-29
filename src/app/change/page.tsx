'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaRegLightbulb, FaSearch, FaBalanceScale, FaUsers, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

// Define a clear interface for our question structure
interface Question {
  question: string;
  options: string[];
  feedback: {
    [key: string]: string;
  };
}

const quizQuestions: Question[] = [
  {
    question: '当听到“CEO”这个词时，你脑海中浮现的第一个形象更倾向于哪种性别？',
    options: ['男性', '女性', '没有明显的性别特征'],
    feedback: {
      '男性': '这很常见！由于社会中男性CEO的比例更高，我们的无意识联想常常倾向于男性。但这正是一个值得我们审视的偏见。实际上，越来越多的女性正在成为卓越的领导者。',
      '女性': '这很棒！你的第一反应已经超越了普遍的刻板印象，看到了女性在领导岗位上的潜力。',
      '没有明显的性别特征': '非常理想的状态！这表明你倾向于将角色与能力而非性别联系在一起，这是打破偏见的重要一步。',
    }
  },
  {
    question: '在一个家庭中，你认为谁更应该承担照顾孩子和家务的主要责任？',
    options: ['母亲', '父亲', '双方平等分担'],
    feedback: {
      '母亲': '这是非常传统的观念，也反映了当前多数家庭的现状。但这种“男主外、女主内”的模式限制了双方的潜能，也加重了女性的“无偿劳动”负担。',
      '父亲': '选择父亲来承担主要责任同样是一种角色预设。平等的伴侣关系意味着责任和权利的共担，而不是简单的角色互换。',
      '双方平等分担': '这是现代家庭关系的核心。当家务和育儿责任被平等分担时，家庭关系会更和谐，孩子也能在更平等的环境中成长。',
    }
  },
  {
    question: '你认为需要高强度体力的工作（如建筑工人）不适合女性吗？',
    options: ['是的，不适合', '不是，能力比性别更重要', '不确定'],
    feedback: {
      '是的，不适合': '这种看法源于对两性生理差异的普遍认知。虽然平均而言男性体力占优，但这不应成为剥夺个体选择权的理由。许多女性同样拥有胜任这些工作的能力和意愿。',
      '不是，能力比性别更重要': '完全正确！用“能力”和“意愿”来代替“性别”作为判断标准，是职业领域实现性别平等的关键。',
      '不确定': '保持不确定和开放性是好事。这意味着你愿意去思考这个问题的复杂性，而不是简单地接受一个标签化的答案。',
    }
  },
];

const ChangePage = () => {
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, option: string) => {
    setAnswers({ ...answers, [questionIndex]: option });
  };
  
  const allAnswered = Object.keys(answers).length === quizQuestions.length;

  return (
    <div className="bg-gray-50">
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
          <h1 className="text-4xl font-extrabold">认知与改变</h1>
          <p className="mt-4 text-lg">真正的改变，始于自我认知和持续的努力。</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1: What is Unconscious Bias? */}
          <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">什么是无意识偏见？</h2>
            <p className="text-lg text-gray-700 mb-4">
              无意识偏见（或隐性偏见）是我们基于成长环境、社会文化和个人经历，在无意中形成的对某些群体的刻板印象。它像一个“自动驾驶”的思维程序，影响着我们的判断和决策，但我们自己却很难察觉。
            </p>
            <p className="text-lg text-gray-700">
              例如，我们可能会下意识地将某些职业、特质或角色与特定性别联系起来。承认这些偏见的存在，不是为了指责，而是为了有机会去审视和改变它。
            </p>
          </section>

          {/* Section 2: Interactive Quiz */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">一个简单的思考练习</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-8">
                {quizQuestions.map((q, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <p className="font-semibold text-lg mb-3">{index + 1}. {q.question}</p>
                    <div className="flex flex-col space-y-2">
                      {q.options.map(opt => (
                        <button 
                          key={opt} 
                          onClick={() => handleAnswer(index, opt)}
                          className={`p-3 rounded-lg text-left transition-all duration-200 flex items-center justify-between ${answers[index] === opt ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-100 hover:bg-gray-200'}`}>
                          <span>{opt}</span>
                          {answers[index] === opt && <FaCheckCircle />}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <button 
                  onClick={() => setShowResults(true)} 
                  disabled={!allAnswered}
                  className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-purple-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                  {allAnswered ? '完成并查看我的反思' : '请回答所有问题'}
                </button>
              </div>
            </div>
            
            {showResults && allAnswered && (
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-center mb-6">练习反思</h3>
                <div className="space-y-4">
                  {quizQuestions.map((q, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-purple-500">
                      <p className="font-bold text-gray-800">对于问题: "{q.question}"</p>
                      <p className="mt-2 text-gray-600">你的选择是: <span className="font-semibold">{answers[index]}</span></p>
                      <div className="mt-3 bg-purple-50 p-4 rounded-md flex items-start space-x-3">
                        <FaInfoCircle className="text-purple-500 text-xl flex-shrink-0 mt-1" />
                        <p className="text-purple-800">{q.feedback[answers[index]]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Section 3: How to Change */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">我们可以做什么？</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaRegLightbulb className="text-purple-500 text-4xl flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl">放慢思考</h3>
                  <p className="text-gray-700">在做重要判断（如招聘、评价他人）时，有意识地给自己几秒钟，质疑第一印象。问问自己这个判断是基于事实，还是基于某个模糊的印象或感觉。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaSearch className="text-purple-500 text-4xl flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl">寻找反例</h3>
                  <p className="text-gray-700">主动关注和了解那些打破刻板印象的人和事，例如，杰出的女性科学家、体贴的男性护理者、在非传统领域发光的个体。这有助于拓宽我们的认知框架。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaBalanceScale className="text-purple-500 text-4xl flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl">使用客观标准</h3>
                  <p className="text-gray-700">在工作和生活中，尽可能用具体、客观、可衡量的标准来代替主观感受。例如，在评估工作表现时，关注完成了什么，而不是“感觉谁更可靠”。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaUsers className="text-purple-500 text-4xl flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl">保持开放对话</h3>
                  <p className="text-gray-700">与家人、朋友和同事温和地讨论这个话题，分享彼此的观察和感受。一个开放和尊重的对话环境是共同进步的基础。</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ChangePage;