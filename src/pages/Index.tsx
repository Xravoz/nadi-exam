
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, User, GraduationCap, Users, Clock, CheckCircle, Trophy, Star, ArrowRight, ArrowLeft, Plus, Eye, LogOut } from "lucide-react";

const Index = () => {
  const [userType, setUserType] = useState<'teacher' | 'student' | null>(null);

  if (userType === 'teacher') {
    return <TeacherAuth />;
  }

  if (userType === 'student') {
    return <StudentLogin />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-12 space-y-6 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl animate-bounce">
              <GraduationCap className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
            منصة الامتحانات الذكية
          </h1>
          
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            نظام متطور ومبتكر لإدارة الامتحانات وتقييم الطلاب بأحدث التقنيات
          </p>
          
          <div className="flex justify-center space-x-reverse space-x-8 text-purple-200">
            <div className="flex items-center space-x-reverse space-x-2">
              <Clock className="w-5 h-5" />
              <span>سريع وفعال</span>
            </div>
            <div className="flex items-center space-x-reverse space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>دقيق ومؤمن</span>
            </div>
            <div className="flex items-center space-x-reverse space-x-2">
              <Star className="w-5 h-5" />
              <span>سهل الاستخدام</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group relative overflow-hidden animate-slide-in-right"
                onClick={() => setUserType('teacher')}>
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="text-center relative z-10 pb-8">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-white text-2xl font-bold mb-4">دخول المعلم</CardTitle>
              <CardDescription className="text-blue-200 text-lg leading-relaxed">
                إنشاء وإدارة الامتحانات بكل سهولة ومرونة
              </CardDescription>
              
              <div className="flex justify-center space-x-reverse space-x-4 mt-4 text-sm text-green-200">
                <div className="flex items-center space-x-reverse space-x-1">
                  <Users className="w-4 h-4" />
                  <span>إدارة الطلاب</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-1">
                  <Trophy className="w-4 h-4" />
                  <span>تتبع النتائج</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
                دخول كمعلم
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group relative overflow-hidden animate-slide-in-right delay-200"
                onClick={() => setUserType('student')}>
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="text-center relative z-10 pb-8">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform duration-500 shadow-xl">
                <User className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-white text-2xl font-bold mb-4">دخول الطالب</CardTitle>
              <CardDescription className="text-blue-200 text-lg leading-relaxed">
                حل الامتحانات والاختبارات بشكل تفاعلي
              </CardDescription>
              
              <div className="flex justify-center space-x-reverse space-x-4 mt-4 text-sm text-purple-200">
                <div className="flex items-center space-x-reverse space-x-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>نتائج فورية</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>وقت محدود</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
                دخول كطالب
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center animate-fade-in delay-500">
          <p className="text-white/70 text-sm">
            تم تطوير المنصة بأحدث التقنيات لضمان أفضل تجربة تعليمية
          </p>
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
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl relative z-10 animate-scale-in">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-xl animate-bounce">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl text-white font-bold">تسجيل دخول المعلم</CardTitle>
          <CardDescription className="text-blue-200 text-lg">
            ادخل بياناتك للوصول إلى لوحة التحكم
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white font-medium">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/25"
              placeholder="nadi@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white font-medium">كلمة المرور</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/25"
              placeholder="123"
            />
          </div>
          <Button onClick={handleLogin} className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 h-12 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            دخول
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.location.reload()} 
            className="w-full border-white/30 text-white hover:bg-white/10 h-12 rounded-xl font-medium transition-all duration-300 hover:scale-105"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl relative z-10 animate-scale-in">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-xl animate-bounce">
            <User className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl text-white font-bold">دخول الطالب</CardTitle>
          <CardDescription className="text-purple-200 text-lg">
            ادخل اسمك وكود الامتحان للبدء
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="studentName" className="text-white font-medium">اسم الطالب</Label>
            <Input
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/25"
              placeholder="ادخل اسمك"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="examCode" className="text-white font-medium">كود الامتحان</Label>
            <Input
              id="examCode"
              value={examCode}
              onChange={(e) => setExamCode(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/25"
              placeholder="ادخل كود الامتحان"
            />
          </div>
          <Button onClick={handleJoinExam} className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 h-12 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            دخول الامتحان
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.location.reload()} 
            className="w-full border-white/30 text-white hover:bg-white/10 h-12 rounded-xl font-medium transition-all duration-300 hover:scale-105"
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
        <div className="mb-8 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl shadow-xl animate-bounce">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">لوحة تحكم المعلم</h1>
          </div>
          <p className="text-green-200 text-lg">إدارة الامتحانات ومتابعة النتائج بسهولة وكفاءة</p>
        </div>

        <div className="flex justify-center mb-8 animate-slide-in-right">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 shadow-2xl">
            <Button 
              onClick={() => setActiveTab('create')}
              className={`px-8 py-3 rounded-xl transition-all duration-300 ${
                activeTab === 'create' 
                  ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-transparent text-white hover:bg-white/10 hover:scale-105'
              }`}
            >
              <Plus className="w-5 h-5 ml-2" />
              إنشاء امتحان
            </Button>
            <Button 
              onClick={() => setActiveTab('view')}
              className={`px-8 py-3 rounded-xl transition-all duration-300 ${
                activeTab === 'view' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105' 
                  : 'bg-transparent text-white hover:bg-white/10 hover:scale-105'
              }`}
            >
              <Eye className="w-5 h-5 ml-2" />
              عرض الامتحانات
            </Button>
          </div>
        </div>

        {activeTab === 'create' && (
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl rounded-2xl animate-scale-in">
            <CardHeader className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-t-2xl">
              <CardTitle className="text-white text-2xl flex items-center gap-3">
                <Plus className="w-6 h-6" />
                إنشاء امتحان جديد
              </CardTitle>
              <CardDescription className="text-green-200">
                أنشئ امتحان تفاعلي مع أسئلة متعددة الخيارات
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              <div className="space-y-3">
                <Label htmlFor="examTitle" className="text-white text-lg font-medium">عنوان الامتحان</Label>
                <Input
                  id="examTitle"
                  value={examTitle}
                  onChange={(e) => setExamTitle(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-14 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="مثال: امتحان الرياضيات - الفصل الأول"
                />
              </div>

              <div className="space-y-6">
                {questions.map((q, qIndex) => (
                  <Card key={qIndex} className="bg-white/5 border-white/10 rounded-2xl overflow-hidden animate-fade-in" style={{animationDelay: `${qIndex * 100}ms`}}>
                    <CardHeader className="bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      <CardTitle className="text-white flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                          {qIndex + 1}
                        </div>
                        السؤال {qIndex + 1}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 p-6">
                      <div className="space-y-3">
                        <Label className="text-white font-medium">نص السؤال</Label>
                        <Input
                          value={q.question}
                          onChange={(e) => updateQuestion(qIndex, 'question', e.target.value)}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                          placeholder="اكتب السؤال هنا..."
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {q.options.map((option, oIndex) => (
                          <div key={oIndex} className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                            <input
                              type="radio"
                              name={`correct-${qIndex}`}
                              checked={q.correctAnswer === oIndex}
                              onChange={() => updateQuestion(qIndex, 'correctAnswer', oIndex)}
                              className="w-5 h-5 text-green-500 focus:ring-green-400 focus:ring-2"
                            />
                            <Input
                              value={option}
                              onChange={(e) => updateQuestion(qIndex, `option-${oIndex}`, e.target.value)}
                              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                              placeholder={`الخيار ${oIndex + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={addQuestion} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Plus className="w-5 h-5 ml-2" />
                  إضافة سؤال
                </Button>
                <Button onClick={createExam} className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CheckCircle className="w-5 h-5 ml-2" />
                  إنشاء الامتحان
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'view' && (
          <div className="space-y-6">
            {exams.map((exam: any, index: number) => (
              <Card key={exam.id} className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl rounded-2xl overflow-hidden animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader className="bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white text-xl flex items-center gap-3">
                        <BookOpen className="w-6 h-6" />
                        {exam.title}
                      </CardTitle>
                      <CardDescription className="text-blue-200 mt-2">
                        كود الامتحان: <span className="font-bold text-green-300">{exam.code}</span> | 
                        عدد الأسئلة: <span className="font-bold text-purple-300">{exam.questions.length}</span> |
                        عدد المشاركين: <span className="font-bold text-pink-300">{exam.results.length}</span>
                      </CardDescription>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-2xl">
                      <div className="text-2xl font-bold text-green-400">{exam.results.length}</div>
                      <div className="text-xs text-blue-200">طالب</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    نتائج الطلاب:
                  </h3>
                  {exam.results.length === 0 ? (
                    <div className="text-center py-8 bg-white/5 rounded-xl">
                      <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-300">لم يقم أي طالب بحل الامتحان بعد</p>
                    </div>
                  ) : (
                    <div className="grid gap-3">
                      {exam.results.map((result: any, index: number) => (
                        <div key={index} className="bg-white/10 p-4 rounded-xl flex justify-between items-center hover:bg-white/15 transition-all duration-300 animate-slide-in-right" style={{animationDelay: `${index * 50}ms`}}>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white font-medium">{result.studentName}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-300">{result.score}/{exam.questions.length}</div>
                              <div className="text-xs text-blue-200">
                                {Math.round((result.score / exam.questions.length) * 100)}%
                              </div>
                            </div>
                            <div className={`w-3 h-3 rounded-full ${result.score >= exam.questions.length / 2 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            {exams.length === 0 && (
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl rounded-2xl animate-scale-in">
                <CardContent className="text-center py-16">
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-white text-xl mb-2">لم يتم إنشاء أي امتحان بعد</p>
                  <p className="text-gray-300">ابدأ بإنشاء امتحانك الأول</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        <div className="mt-12 text-center animate-fade-in">
          <Button 
            onClick={() => window.location.reload()} 
            className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <LogOut className="w-5 h-5 ml-2" />
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
  const [timeLeft, setTimeLeft] = useState(exam.questions.length * 60); // 1 minute per question

  React.useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      submitExam();
    }
  }, [timeLeft, showResults]);

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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const score = answers.reduce((total, answer, index) => {
      return total + (answer === exam.questions[index].correctAnswer ? 1 : 0);
    }, 0);

    const percentage = Math.round((score / exam.questions.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 flex items-center justify-center p-4" dir="rtl">
        <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl rounded-2xl animate-scale-in">
          <CardHeader className="text-center bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-t-2xl">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl text-white">نتيجة الامتحان</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-8 p-8">
            <div className="relative">
              <div className="text-8xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                {score}/{exam.questions.length}
              </div>
              <div className="absolute -top-2 -right-2">
                <Star className="w-12 h-12 text-yellow-400 animate-bounce" />
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-2xl text-white">أحسنت يا {exam.studentName}!</p>
              <div className="bg-white/10 rounded-2xl p-6 space-y-3">
                <div className="text-lg text-purple-200">نسبة النجاح</div>
                <div className="text-4xl font-bold text-green-400">{percentage}%</div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400">{score}</div>
                  <div className="text-sm text-white">إجابات صحيحة</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <Clock className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-400">{exam.questions.length - score}</div>
                  <div className="text-sm text-white">إجابات خاطئة</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-400">{exam.questions.length}</div>
                  <div className="text-sm text-white">إجمالي الأسئلة</div>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              العودة للصفحة الرئيسية
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = exam.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / exam.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 p-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
            <h1 className="text-3xl font-bold text-white mb-2">{exam.title}</h1>
            <p className="text-purple-200 mb-4">الطالب: {exam.studentName}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5" />
                <span>الوقت المتبقي: {formatTime(timeLeft)}</span>
              </div>
              <div className="text-white">
                السؤال {currentQuestion + 1} من {exam.questions.length}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-400 to-pink-500 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl rounded-2xl animate-scale-in">
          <CardHeader className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-t-2xl">
            <CardTitle className="text-white text-xl flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold">
                {currentQuestion + 1}
              </div>
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-8">
            <div className="grid gap-4">
              {question.options.map((option: string, index: number) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-right p-6 text-lg rounded-xl transition-all duration-300 ${
                    answers[currentQuestion] === index
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-xl scale-105'
                      : 'bg-white/20 hover:bg-white/30 text-white hover:scale-105 border border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === index 
                        ? 'border-white bg-white' 
                        : 'border-white/50'
                    }`}>
                      {answers[currentQuestion] === index && (
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                      )}
                    </div>
                  </div>
                </Button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/20">
              <Button 
                onClick={prevQuestion} 
                disabled={currentQuestion === 0}
                className="bg-gray-500/20 hover:bg-gray-500/30 text-white disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <ArrowRight className="w-5 h-5 ml-2" />
                السؤال السابق
              </Button>
              
              <div className="flex gap-2">
                {exam.questions.map((_: any, index: number) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentQuestion
                        ? 'bg-purple-400 scale-125'
                        : answers[index] !== undefined
                        ? 'bg-green-400'
                        : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              {currentQuestion === exam.questions.length - 1 ? (
                <Button 
                  onClick={submitExam}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  disabled={answers.length !== exam.questions.length}
                >
                  <CheckCircle className="w-5 h-5 ml-2" />
                  إنهاء الامتحان
                </Button>
              ) : (
                <Button 
                  onClick={nextQuestion}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="w-5 h-5 ml-2" />
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
