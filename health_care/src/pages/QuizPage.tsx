import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocalizedQuizzes } from '../data/quizzes';
import { QuizCard } from '../components/quiz/QuizCard';
import { useLanguage } from '../context/LanguageContext';
import { 
  Award, 
  RotateCcw, 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export function QuizPage() {
  const { language } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const quizzes = getLocalizedQuizzes(language);
  const totalQuestions = quizzes.length;
  const currentQuestion = quizzes[currentQuestionIndex];

  const handleNextQuestion = (wasCorrect: boolean) => {
    if (wasCorrect) {
      setCorrectCount(prev => prev + 1);
    }

    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setQuizFinished(false);
    setHasStarted(true);
  };

  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">
          {language === 'es' ? 'Inicio' : 'Home'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">
          {language === 'es' ? 'Quiz de Primeros Auxilios' : 'First Aid Knowledge Quiz'}
        </span>
      </nav>

      {/* Intro Screen */}
      {!hasStarted && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm text-center max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto shadow-xs">
            <Award className="w-8 h-8 stroke-[2.2]" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Evaluación Práctica Interactiva' : 'Interactive Knowledge Check'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? 'Pon a Prueba tu Capacidad de Respuesta' : 'Test Your First Aid Readiness'}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
              {language === 'es'
                ? 'Responde 6 escenarios clínicos realistas basados en pautas internacionales de resucitación y primeros auxilios. Descubre por qué ciertas reacciones intuitivas son peligrosas.'
                : 'Answer 6 realistic clinical scenarios based on international resuscitation and first aid guidelines. Learn why certain instinctive actions are dangerous.'}
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-4 text-xs text-slate-600 dark:text-slate-300 text-left border border-slate-200 dark:border-slate-700 space-y-1.5">
            <p className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              {language === 'es' ? 'Recordatorio de Alcance Educativo:' : 'Educational Scope Reminder:'}
            </p>
            <p>
              {language === 'es'
                ? 'Este cuestionario está diseñado para la concientización ciudadana y refuerzo educativo. No reemplaza un curso presencial certificado de RCP y primeros auxilios.'
                : 'This quiz is designed for educational reinforcement and public awareness. It is not an accredited certification or replacement for hands-on certified CPR training.'}
            </p>
          </div>

          <button
            onClick={() => setHasStarted(true)}
            className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3.5 rounded-xl transition duration-150 shadow-md inline-flex items-center justify-center gap-2 text-base"
          >
            <span>{language === 'es' ? 'Comenzar el Quiz de Primeros Auxilios' : 'Start First Aid Quiz'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Active Question Screen */}
      {hasStarted && !quizFinished && (
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
              <span>
                {language === 'es' 
                  ? `Progreso: Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}` 
                  : `Progress: Question ${currentQuestionIndex + 1} of ${totalQuestions}`}
              </span>
              <span>
                {Math.round(((currentQuestionIndex) / totalQuestions) * 100)}% {language === 'es' ? 'completado' : 'Complete'}
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <QuizCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
            onNextQuestion={handleNextQuestion}
            isLastQuestion={currentQuestionIndex + 1 === totalQuestions}
          />
        </div>
      )}

      {/* Final Results Screen */}
      {quizFinished && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm max-w-2xl mx-auto space-y-8 animate-in fade-in duration-200">
          <div className="text-center space-y-3">
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-sm ${
              scorePercentage >= 80 ? 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400' : 'bg-brand-100 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400'
            }`}>
              <Award className="w-10 h-10" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? '¡Quiz Finalizado!' : 'Quiz Completed!'}
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              {language === 'es' 
                ? <>Respondiste correctamente <strong>{correctCount}</strong> de <strong>{totalQuestions}</strong> escenarios.</>
                : <>You correctly answered <strong>{correctCount}</strong> out of <strong>{totalQuestions}</strong> scenarios.</>}
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-lg font-black text-slate-900 dark:text-white">
              <span>{language === 'es' ? 'Puntaje:' : 'Score:'}</span>
              <span className={scorePercentage >= 80 ? 'text-emerald-600 dark:text-emerald-400' : 'text-brand-600 dark:text-brand-400'}>
                {scorePercentage}%
              </span>
            </div>
          </div>

          {/* Performance Assessment Box */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>{language === 'es' ? 'Lecciones clave para recordar siempre:' : 'Key First Aid Lessons to Remember:'}</span>
            </div>
            <ul className="space-y-1.5 list-disc pl-5 leading-relaxed">
              <li>
                <strong>{language === 'es' ? 'RCP:' : 'CPR:'}</strong>{' '}
                {language === 'es' ? 'Comprimir entre 5 y 6 cm de profundidad a 100-120 lpm al ritmo de "Stayin\' Alive".' : 'Compress chest 5-6 cm deep at 100-120 bpm to "Stayin\' Alive".'}
              </li>
              <li>
                <strong>{language === 'es' ? 'Quemaduras:' : 'Burns:'}</strong>{' '}
                {language === 'es' ? 'Enfriar de inmediato con agua corriente limpia durante 20 minutos (jamás hielo ni manteca).' : 'Cool immediately under cool running tap water for 20 minutes (no ice or butter).'}
              </li>
              <li>
                <strong>{language === 'es' ? 'Atragantamiento:' : 'Choking:'}</strong>{' '}
                {language === 'es' ? 'Si la persona aún tose con fuerza, NO golpees la espalda; déjala toser.' : 'If the person can still cough, do NOT interfere; let them cough forcefully.'}
              </li>
              <li>
                <strong>{language === 'es' ? 'Convulsiones:' : 'Seizures:'}</strong>{' '}
                {language === 'es' ? 'Protege la cabeza de golpes y NUNCA metas nada dentro de la boca.' : 'Protect the head and NEVER place objects inside the mouth.'}
              </li>
              <li>
                <strong>{language === 'es' ? 'ACV / Ictus:' : 'Stroke:'}</strong>{' '}
                {language === 'es' ? 'Verifica el protocolo BE-FAST y llama de inmediato a emergencias.' : 'Check BE-FAST and call emergency immediately.'}
              </li>
            </ul>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={handleRestart}
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-xl transition duration-150 flex items-center gap-2 text-sm shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{language === 'es' ? 'Reintentar Quiz' : 'Retake Quiz'}</span>
            </button>
            <Link
              to="/emergencies"
              className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 transition duration-150 flex items-center gap-2 text-sm"
            >
              <BookOpen className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>{language === 'es' ? 'Repasar Guías de Emergencia' : 'Review Emergency Guides'}</span>
            </Link>
          </div>
        </div>
      )}

      {/* Safety Notice Footer */}
      <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between flex-wrap gap-2">
        <span className="flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4 text-slate-500" />
          {language === 'es'
            ? 'Los quizzes son ejercicios educativos basados en consensos de la OMS, Cruz Roja y AHA.'
            : 'Quizzes are educational exercises based on WHO, IFRC, and AHA consensus guidelines.'}
        </span>
        <Link to="/disclaimer" className="text-brand-600 font-bold hover:underline">
          {language === 'es' ? 'Ver Aviso de Alcance Médico' : 'Read Medical Scope Disclaimer'} &rarr;
        </Link>
      </div>

    </div>
  );
}
