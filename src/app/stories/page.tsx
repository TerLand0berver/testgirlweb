import Image from 'next/image';
import Link from 'next/link';
import { FaPenNib } from 'react-icons/fa';

// Placeholder data for stories
const stories = [
  {
    id: 1,
    category: '职场观察',
    title: '“你的计划里，有家庭吗？”——面试中的隐形门槛',
    excerpt: '当我的男同事被问及职业规划和技术热情时，面试官却微笑着问我，“我们想了解一下，你未来几年有组建家庭的计划吗？” 这个问题看似关心，却像一个标签，贴在了我的职业道路上...',
    author: '一位产品经理',
    imageUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
  },
  {
    id: 2,
    category: '家庭生活',
    title: '我给儿子买了一套厨具玩具',
    excerpt: '亲戚来家里看到后，半开玩笑地说：“怎么给男孩子买这个？” 我回答：“因为他的爸爸也会做饭啊。” 打破刻板印象，需要从我们为孩子提供的每一个选择开始。',
    author: '一位年轻的父亲',
    imageUrl: 'https://images.pexels.com/photos/4473864/pexels-photo-4473864.jpeg',
  },
  {
    id: 3,
    category: '教育反思',
    title: '“理科是男生的强项”，这句话我听了整个中学',
    excerpt: '我曾是班里唯一进入奥数决赛的女生。但从老师到同学，似乎都默认这只是一个“意外”。这种无形的压力，让许多和我一样的女孩，在选择大学专业时，默默地避开了她们本可以发光的领域。',
    author: '一位前理科竞赛参与者',
    imageUrl: 'https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg',
  },
  {
    id: 4,
    category: '自我认知',
    title: '学会拒绝“贤惠”的绑架',
    excerpt: '从小我被教育要“懂事”、“体贴”，要“出得厅堂，入得厨房”。我曾为此自豪，也为此疲惫。直到有一天我意识到，我的价值不应由我为别人付出了多少来定义。拒绝，是为了更好地爱自己。',
    author: '匿名用户',
    imageUrl: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg',
  },
   {
    id: 5,
    category: '社会观察',
    title: '当“女司机”成为一个贬义词',
    excerpt: '每一次听到这个词，我都感到无奈。它将个体的驾驶技术问题，粗暴地归结于性别，并以此取乐。这不仅是对女性的偏见，也忽视了大量优秀的女驾驶员和糟糕的男驾驶员。',
    author: '一位通勤路上的观察者',
    imageUrl: 'https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg',
  },
  {
    id: 6,
    category: '盟友的声音',
    title: '作为男性，我如何支持性别平等',
    excerpt: '平等不只是女性的事。在会议上，我会主动让被忽略的女性同事发言；在家里，我承担一半的家务和育儿责任。这不是“帮忙”，这是我的本分。真正的强大，是懂得尊重与合作。',
    author: '一位软件工程师',
    imageUrl: 'https://images.pexels.com/photos/7845122/pexels-photo-7845122.jpeg',
  },
];

const StoriesPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">故事墙</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">每一个故事都是一扇窗，让我们得以窥见一个更真实、更多元的世界。在这里，我们分享、倾听、共鸣。</p>
          <Link href="/action" className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
            <FaPenNib className="-ml-1 mr-3 h-5 w-5" />
            分享你的故事
          </Link>
        </div>
      </header>

      {/* Stories Grid */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-48 w-full">
                  <Image src={story.imageUrl} alt={story.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm font-semibold text-purple-600">{story.category}</p>
                  <h2 className="mt-2 text-xl font-bold text-gray-900">{story.title}</h2>
                  <p className="mt-3 text-gray-600 flex-grow">{story.excerpt}</p>
                  <p className="mt-4 text-sm text-gray-500 italic text-right">—— {story.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoriesPage;
