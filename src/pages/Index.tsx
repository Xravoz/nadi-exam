
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, User } from "lucide-react";

const Index = () => {
  const [userType, setUserType] = useState<'teacher' | 'student' | null>(null);

  if (userType === 'teacher') {
    return <TeacherAuth />;
  }

  if (userType === 'student') {
    return <StudentLogin />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4" dir="rtl">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 animate-pulse">
            منصة الامتحانات الذكية
          </h1>
          <p className="text-xl text-blue-200">
            نظام متطور لإدارة الامتحانات وتقييم الطلاب
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setUserType('teacher')}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">دخول المعلم</CardTitle>
              <CardDescription className="text-blue-200">
                إنشاء وإدارة الامتحانات
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-3">
                دخول كمعلم
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setUserType('student')}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">دخول الطالب</CardTitle>
              <CardDescription className="text-blue-200">
                حل الامتحانات والاختبارات
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3">
                دخول كطالب
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const TeacherAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === 'nadi@gmail.com' && password === '123') {
      setIsLoggedIn(true);
    } else {
      alert('بيانات دخول خاطئة');
    }
  };

  if (isLoggedIn) {
    return <TeacherDashboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4" dir="rtl">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">تسجيل دخول المعلم</CardTitle>
          <CardDescription className="text-blue-200">
            ادخل بياناتك للوصول إلى لوحة التحكم
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-white">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              placeholder="nadi@gmail.com"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-white">كلمة المرور</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              placeholder="123"
            />
          </div>
          <Button onClick={handleLogin} className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
            دخول
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.location.reload()} 
            className="w-full border-white/30 text-white hover:bg-white/10"
          >
            العودة للصفحة الرئيسية
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const StudentLogin = () => {
  const [studentName, setStudentName] = useState('');
  const [examCode, setExamCode] = useState('');
  const [currentExam, setCurrentExam] = useState(null);

  const handleJoinExam = () => {
    const exams = JSON.parse(localStorage.getItem('exams') || '[]');
    const exam = exams.find((e: any) => e.code === examCode);
    
    if (exam && studentName.trim()) {
      setCurrentExam({...exam, studentName});
    } else {
      alert('كود الامتحان غير صحيح أو اسم الطالب فارغ');
    }
  };

  if (currentExam) {
    return <ExamInterface exam={currentExam} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 flex items-center justify-center p-4" dir="rtl">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">دخول الطالب</CardTitle>
          <CardDescription className="text-purple-200">
            ادخل اسمك وكود الامتحان للبدء
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="studentName" className="text-white">اسم الطالب</Label>
            <Input
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              placeholder="ادخل اسمك"
            />
          </div>
          <div>
            <Label htmlFor="examCode" className="text-white">كود الامتحان</Label>
            <Input
              id="examCode"
              value={examCode}
              onChange={(e) => setExamCode(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              placeholder="ادخل كود الامتحان"
            />
          </div>
          <Button onClick={handleJoinExam} className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
            دخول الامتحان
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.location.reload()} 
            className="w-full border-white/30 text-white hover:bg-white/10"
          >
            العودة للصفحة الرئيسية
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState<'create' | 'view'>('create');
  const [examTitle, setExamTitle] = useState('');
  const [questions, setQuestions] = useState([{
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  }]);

  const addQuestion = () => {
    setQuestions([...questions, {
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0
    }]);
  };

  const updateQuestion = (index: number, field: string, value: any) => {
    const updated = [...questions];
    if (field === 'question') {
      updated[index].question = value;
    } else if (field.startsWith('option')) {
      const optionIndex = parseInt(field.split('-')[1]);
      updated[index].options[optionIndex] = value;
    } else if (field === 'correctAnswer') {
      updated[index].correctAnswer = value;
    }
    setQuestions(updated);
  };

  const createExam = () => {
    if (!examTitle.trim() || questions.some(q => !q.question.trim())) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    const examCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const exam = {
      id: Date.now(),
      title: examTitle,
      code: examCode,
      questions,
      results: []
    };

    const exams = JSON.parse(localStorage.getItem('exams') || '[]');
    exams.push(exam);
    localStorage.setItem('exams', JSON.stringify(exams));

    alert(`تم إنشاء الامتحان بنجاح!\nكود الامتحان: ${examCode}`);
    setExamTitle('');
    setQuestions([{
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0
    }]);
  };

  const exams = JSON.parse(localStorage.getItem('exams') || '[]');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">لوحة تحكم المعلم</h1>
          <p className="text-green-200">إدارة الامتحانات ومتابعة النتائج</p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-1">
            <Button 
              onClick={() => setActiveTab('create')}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'create' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-transparent text-white hover:bg-white/10'
              }`}
            >
              إنشاء امتحان
            </Button>
            <Button 
              onClick={() => setActiveTab('view')}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'view' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-transparent text-white hover:bg-white/10'
              }`}
            >
              عرض الامتحانات
            </Button>
          </div>
        </div>

        {activeTab === 'create' && (
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">إنشاء امتحان جديد</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="examTitle" className="text-white text-lg">عنوان الامتحان</Label>
                <Input
                  id="examTitle"
                  value={examTitle}
                  onChange={(e) => setExamTitle(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  placeholder="ادخل عنوان الامتحان"
                />
              </div>

              {questions.map((q, qIndex) => (
                <Card key={qIndex} className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">السؤال {qIndex + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-white">نص السؤال</Label>
                      <Input
                        value={q.question}
                        onChange={(e) => updateQuestion(qIndex, 'question', e.target.value)}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                        placeholder="ادخل نص السؤال"
                      />
                    </div>
                    {q.options.map((option, oIndex) => (
                      <div key={oIndex} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`correct-${qIndex}`}
                          checked={q.correctAnswer === oIndex}
                          onChange={() => updateQuestion(qIndex, 'correctAnswer', oIndex)}
                          className="mr-2"
                        />
                        <Input
                          value={option}
                          onChange={(e) => updateQuestion(qIndex, `option-${oIndex}`, e.target.value)}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                          placeholder={`الخيار ${oIndex + 1}`}
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}

              <div className="flex gap-4">
                <Button onClick={addQuestion} className="bg-blue-500 hover:bg-blue-600">
                  إضافة سؤال
                </Button>
                <Button onClick={createExam} className="bg-green-500 hover:bg-green-600">
                  إنشاء الامتحان
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'view' && (
          <div className="space-y-6">
            {exams.map((exam: any) => (
              <Card key={exam.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{exam.title}</CardTitle>
                  <CardDescription className="text-blue-200">
                    كود الامتحان: {exam.code} | عدد الأسئلة: {exam.questions.length}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="text-white font-semibold mb-4">نتائج الطلاب:</h3>
                  {exam.results.length === 0 ? (
                    <p className="text-gray-300">لم يقم أي طالب بحل الامتحان بعد</p>
                  ) : (
                    <div className="space-y-2">
                      {exam.results.map((result: any, index: number) => (
                        <div key={index} className="bg-white/10 p-3 rounded-lg flex justify-between">
                          <span className="text-white">{result.studentName}</span>
                          <span className="text-green-300">{result.score}/{exam.questions.length}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            {exams.length === 0 && (
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="text-center py-8">
                  <p className="text-white text-lg">لم يتم إنشاء أي امتحان بعد</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        <div className="mt-8 text-center">
          <Button 
            onClick={() => window.location.reload()} 
            className="bg-red-500 hover:bg-red-600"
          >
            تسجيل الخروج
          </Button>
        </div>
      </div>
    </div>
  );
};

const ExamInterface = ({ exam }: { exam: any }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitExam = () => {
    const score = answers.reduce((total, answer, index) => {
      return total + (answer === exam.questions[index].correctAnswer ? 1 : 0);
    }, 0);

    const result = {
      studentName: exam.studentName,
      score,
      answers
    };

    const exams = JSON.parse(localStorage.getItem('exams') || '[]');
    const examIndex = exams.findIndex((e: any) => e.code === exam.code);
    if (examIndex !== -1) {
      exams[examIndex].results.push(result);
      localStorage.setItem('exams', JSON.stringify(exams));
    }

    setShowResults(true);
  };

  if (showResults) {
    const score = answers.reduce((total, answer, index) => {
      return total + (answer === exam.questions[index].correctAnswer ? 1 : 0);
    }, 0);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 flex items-center justify-center p-4" dir="rtl">
        <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-white">نتيجة الامتحان</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-6xl font-bold text-green-400">{score}/{exam.questions.length}</div>
            <p className="text-xl text-white">أحسنت يا {exam.studentName}!</p>
            <div className="text-lg text-purple-200">
              نسبة النجاح: {Math.round((score / exam.questions.length) * 100)}%
            </div>
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
            >
              العودة للصفحة الرئيسية
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = exam.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 p-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">{exam.title}</h1>
          <p className="text-purple-200">الطالب: {exam.studentName}</p>
          <div className="mt-4 bg-white/10 backdrop-blur-lg rounded-full p-2 inline-block">
            <span className="text-white px-4">
              السؤال {currentQuestion + 1} من {exam.questions.length}
            </span>
          </div>
        </div>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white text-xl">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {question.options.map((option: string, index: number) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full text-right p-4 text-lg ${
                  answers[currentQuestion] === index
                    ? 'bg-purple-500 hover:bg-purple-600'
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                {option}
              </Button>
            ))}

            <div className="flex justify-between mt-8">
              <Button 
                onClick={prevQuestion} 
                disabled={currentQuestion === 0}
                className="bg-gray-500 hover:bg-gray-600 disabled:opacity-50"
              >
                السؤال السابق
              </Button>
              
              {currentQuestion === exam.questions.length - 1 ? (
                <Button 
                  onClick={submitExam}
                  className="bg-green-500 hover:bg-green-600"
                  disabled={answers.length !== exam.questions.length}
                >
                  إنهاء الامتحان
                </Button>
              ) : (
                <Button 
                  onClick={nextQuestion}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  السؤال التالي
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
