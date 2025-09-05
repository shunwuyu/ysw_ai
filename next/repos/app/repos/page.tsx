import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from '@/components/ui/card';
import { type Repo } from '@/app/types/repo';

export default async function ReposPage() {
    // 在服务器端获取数据
    const result = await fetch('/api/repos');
    const repos = result.json();
    console.log(repos);

    // const response = await fetch('https://api.github.com/users/shunwuyu/repos')
    // const repos: Repo[] = await response.json();

    return (
        <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Repositories</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <Card key={repo.id}>
            <CardHeader>
              <CardTitle className="text-lg">
                <a 
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {repo.name}
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-2">
                {repo.description || 'No description'}
              </p>
              <div className="flex items-center gap-4 text-sm">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  ⭐ {repo.stargazers_count}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
    )
}