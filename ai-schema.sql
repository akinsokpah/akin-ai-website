-- Courses
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- Books
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT,
  author TEXT,
  url TEXT,
  read_only BOOLEAN DEFAULT TRUE
);

-- AI Chat Log
CREATE TABLE ai_chat_log (
  id SERIAL PRIMARY KEY,
  user TEXT,
  message TEXT,
  response TEXT,
  timestamp TIMESTAMP DEFAULT now()
);
