import { useState } from 'react';
import { QuizQuestion } from '../../types';
import { CheckCircle2, XCircle, HelpCircle, Shield, ArrowRight } from 'lucide-react';

interface QuizCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onNextQuestion: (wasCorrect: boolean) => void;
  isLastQuestion: boolean;
}

export function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  onNextQuestion,
  isLastQuestion
}: QuizCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelectOption = (index: number) => {
    if (hasAnswered) return;
    setSelectedOption(index);
    setHasAnswered(true);
  };

  const handleContinue = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === question.correctAnswerIndex;
    onNextQuestion(isCorrect);
    // Reset state for next question
    setSelectedOption(null);
    setHasAnswered(false);
  };

  const isSelectedCorrect = selectedOption === question.correctAnswerIndex;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
      
      {/* Question Header & Meta */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-brand-600 text-white font-extrabold text-xs flex items-center justify-center">
            {questionNumber}
          </span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
          <Shield className="w-3.5 h-3.5 text-brand-600" />
          <span>{question.topic}</span>
        </div>
      </div>

      {/* Question Prompt */}
      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
          {question.question}
        </h3>
        {question.context && (
          <p className="text-sm text-slate-600 leading-relaxed">
            {question.context}
          </p>
        )}
      </div>

      {/* Answer Options */}
      <div className="space-y-3 pt-2">
        {question.options.map((option, idx) => {
          let optionStyle = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';
          let letterStyle = 'bg-white border-slate-300 text-slate-700';

          if (hasAnswered) {
            if (idx === question.correctAnswerIndex) {
              optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-500';
              letterStyle = 'bg-emerald-600 text-white border-emerald-600';
            } else if (idx === selectedOption) {
              optionStyle = 'bg-red-50 border-red-300 text-red-950 ring-1 ring-red-400';
              letterStyle = 'bg-red-600 text-white border-red-600';
            } else {
              optionStyle = 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-60';
              letterStyle = 'bg-slate-100 text-slate-400 border-slate-200';
            }
          }

          const optionLetters = ['A', 'B', 'C', 'D'];

          return (
            <button
              key={idx}
              disabled={hasAnswered}
              onClick={() => handleSelectOption(idx)}
              className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition duration-150 flex items-start gap-3.5 font-medium text-sm sm:text-base leading-relaxed ${optionStyle}`}
            >
              <span className={`w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center flex-shrink-0 border mt-0.5 transition ${letterStyle}`}>
                {optionLetters[idx]}
              </span>
              <span className="flex-1">{option}</span>

              {hasAnswered && idx === question.correctAnswerIndex && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              )}
              {hasAnswered && idx === selectedOption && idx !== question.correctAnswerIndex && (
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Immediate Clinical Explanation Feedback */}
      {hasAnswered && (
        <div className={`p-5 rounded-2xl border space-y-2 animate-in fade-in duration-200 ${
          isSelectedCorrect ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' : 'bg-red-50/80 border-red-200 text-red-950'
        }`}>
          <div className="flex items-center gap-2 font-bold text-sm">
            {isSelectedCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Correct action! Here is why:</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-red-700" />
                <span>Incorrect choice. Here is the clinical rationale:</span>
              </>
            )}
          </div>

          <p className="text-xs sm:text-sm leading-relaxed text-slate-800">
            {question.explanation}
          </p>

          <div className="pt-2 text-[11px] font-semibold text-slate-500 flex items-center gap-1.5 border-t border-slate-200/60">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
            <span>Authority Reference: <strong>{question.medicalAuthority}</strong></span>
          </div>
        </div>
      )}

      {/* Continue Button */}
      {hasAnswered && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={handleContinue}
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-xl transition duration-150 flex items-center gap-2 shadow-sm text-sm"
          >
            <span>{isLastQuestion ? 'View Quiz Results' : 'Next Scenario'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}

