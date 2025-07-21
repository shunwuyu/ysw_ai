// src/api/github.ts
import axios from 'axios';

// 通用响应结构
export type ApiResponse<T> = {
  code: number;
  data: T;
  message: string;
};

// GitHub repo 类型
export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
};

export const fetchRepos = async (): Promise<ApiResponse<Repo[]>> => {
  try {
    const response = await axios.get<Repo[]>(
      'https://api.github.com/users/shunwuyu/repos'
    );

    return {
      code: 0,
      data: response.data,
      message: 'success',
    };
  } catch (error) {
    return {
      code: 1,
      data: [],
      message: 'fetch failed',
    };
  }
};
