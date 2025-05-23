# 机器学习 

- notebookllm
  你不知道的JavaScript 深入学习
  AI 播客

- modelscope
  阿里开源大模型社区
- python  notebook 
  ipynb 后缀 
  nlp 机器学习文档格式

- python
  nlp 第一语言
  js 也挺好

- 引入了pipeline 模块
  model中国第一大模型社区
  魔搭
  from modelscope.pipelines import pipeline
  from modelscope.utils.constant import Tasks

  semantic_cls = pipeline(Tasks.text_classification, 'damo/nlp_structbert_sentiment-classification_chinese-base')
  打分 label分类 
  result = semantic_cls(input='胡总吉他弹得真帅')