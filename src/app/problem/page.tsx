import Image from 'next/image';

const ProblemPage = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <header className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">看见“偏爱”</h1>
          <p className="mt-4 text-lg text-gray-600">每一个故事背后，都是一个渴望被平等对待的灵魂。偏见，存在于家庭、职场，也存在于校园和我们未曾察觉的日常中。</p>
        </div>
      </header>

      {/* Main Content: A grid of stories */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Story 1: Family */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">家庭中的“隐形”角落</h2>
              <p className="text-gray-700 mb-4">
                “从小，弟弟的碗里总是多一块肉，他的房间总是更大更亮。父母总说‘你是姐姐，要让着弟弟’。他们爱我，但那种爱，似乎总是有条件的、打了折扣的。我不是不被爱，只是不被‘更’爱。”
              </p>
              <p className="text-gray-500 italic">—— 一位网友的匿名分享</p>
            </div>
            <div className="order-1 md:order-2 h-80 w-full relative">
              <Image src="https://images.pexels.com/photos/16090939/pexels-photo-16090939/free-photo-of-a-girl-in-a-white-dress-is-sitting-on-a-ledge.jpeg" alt="A young girl looking out a window" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Story 2: Workplace */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-80 w-full relative">
              <Image src="https://images.pexels.com/photos/7792811/pexels-photo-7792811.jpeg" alt="A professional woman in a meeting" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">职场上的“玻璃天花板”</h2>
              <p className="text-gray-700 mb-4">
                “能力相当，甚至更强，但晋升机会却总落在男同事身上。面试时，我被问及婚育计划，而他们不会。重要的项目，领导似乎更‘放心’交给男同事主导。这些都不是明文规定，却像一堵无形的墙。”
              </p>
              <p className="text-gray-500 italic">—— 一位项目经理的自述</p>
            </div>
          </div>

          {/* Story 3: Education */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">校园里的“刻板印象”</h2>
              <p className="text-gray-700 mb-4">
                “数学课上，老师总是鼓励男生‘大胆尝试’，却对女生说‘仔细点就好’。仿佛从一开始，我们就被预设了不同的能力上限。这种微妙的差别，在不知不觉中消磨着许多女孩对科学的热情。”
              </p>
              <p className="text-gray-500 italic">—— 一位大学生的回忆</p>
            </div>
            <div className="order-1 md:order-2 h-80 w-full relative">
              <Image src="https://images.pexels.com/photos/8472933/pexels-photo-8472933.jpeg" alt="A young student in a classroom" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Story 4: Language & Culture */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-80 w-full relative">
              <Image src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg" alt="A collection of books and words" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">语言中的“无形之墙”</h2>
              <p className="text-gray-700 mb-4">
                “‘女司机’、‘女博士’、‘女强人’...为什么这些词前面要特意加上‘女’字？仿佛女性的身份本身就是一种例外。语言塑造思维，这些日常用语在潜移默化中强化了偏见。”
              </p>
              <p className="text-gray-500 italic">—— 一位语言学爱好者的观察</p>
            </div>
          </div>

          {/* Story 5: Internalized */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">内心的“自我设限”</h2>
              <p className="text-gray-700 mb-4">
                “当一个绝佳的机会出现时，我脑海里的第一个念头竟然是‘我真的可以吗？’。长久以来，社会对女性的期望让我习惯了自我怀疑。打破外界的偏见很难，但打破自己内心的枷锁，或许是更重要的一步。”
              </p>
              <p className="text-gray-500 italic">—— 一位创业者的心声</p>
            </div>
            <div className="order-1 md:order-2 h-80 w-full relative">
              <Image src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg" alt="A woman looking thoughtfully in a mirror" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ProblemPage;
