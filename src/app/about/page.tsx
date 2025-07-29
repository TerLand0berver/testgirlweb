import Image from 'next/image';
import { FaBullseye, FaEye, FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="relative py-20 bg-gray-800">
        <Image 
          src="https://images.pexels.com/photos/3184429/pexels-photo-3184429.jpeg" 
          alt="A team putting their hands together" 
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-extrabold">关于我们</h1>
          <p className="mt-4 text-lg">我们是一群相信改变的普通人，致力于让每一个声音都被听见。</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Mission and Vision */}
          <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">我们的使命与愿景</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <FaBullseye className="text-purple-500 text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">我们的使命</h3>
                <p className="text-gray-700">
                  我们致力于揭示和消除社会中基于性别的无意识偏见，特别是“重男轻女”和“隐形偏爱”等现象。通过数据、故事和教育，我们希望提高公众认知，推动文化观念的进步。
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <FaEye className="text-purple-500 text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">我们的愿景</h3>
                <p className="text-gray-700">
                  我们梦想一个不因性别而预设能力、限制选择的未来。在这个未来里，每个人都能拥有平等的机会去追求自己的潜能，实现自己的人生价值。
                </p>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-80 w-full relative">
                <Image src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg" alt="People brainstorming with sticky notes" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">项目缘起</h2>
                <p className="text-gray-700 mb-4">
                  这个项目始于一次深夜长谈。我们中的几位朋友，在分享各自的成长经历和职场见闻时，惊讶地发现，那些看似微不足道的“偏爱”和“刻板印象”竟如此普遍，并深刻地影响了我们的人生轨迹。
                </p>
                <p className="text-gray-700">
                  我们意识到，沉默和默许是偏见得以延续的土壤。于是，我们决定创建一个平台，用以承载被忽视的故事，展示被忽略的数据，并为那些同样感到困惑、希望做出改变的人们提供一个发声和学习的角落。这，就是“打破偏见”项目的起点。
                </p>
              </div>
            </div>
          </section>

          {/* Team Section (Placeholder) */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">我们的团队</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Team Member Card */}
              <div className="text-center text-gray-700">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <FaUsers className="text-gray-400 text-5xl"/>
                </div>
                <h4 className="font-bold text-lg">一群热心人</h4>
                <p className="text-sm text-gray-500">研究者、设计师、开发者</p>
              </div>
              {/* Add more team members as needed */}
            </div>
            <p className="text-center mt-8 text-gray-600">
              我们是一个由志愿者组成的多元化团队，因共同的信念而聚集。我们相信，微小的行动汇聚起来，就能产生巨大的能量。
            </p>
          </section>

        </div>
      </main>
    </div>
  );
};

export default AboutPage;
