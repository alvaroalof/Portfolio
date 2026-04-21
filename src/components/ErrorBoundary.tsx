import { useState, useEffect, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorState {
  hasError: boolean;
  error: Error | null;
}

// Error Boundary funcional usando react-error-boundary pattern
export function ErrorBoundary({ children, fallback }: Props) {
  const [errorState, setErrorState] = useState<ErrorState>({ hasError: false, error: null });

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('ErrorBoundary caught an error:', event.error);
      setErrorState({
        hasError: true,
        error: event.error instanceof Error ? event.error : new Error(String(event.error))
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('ErrorBoundary caught unhandled rejection:', event.reason);
      setErrorState({
        hasError: true,
        error: event.reason instanceof Error ? event.reason : new Error(String(event.reason))
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  const handleReset = () => {
    setErrorState({ hasError: false, error: null });
    window.location.href = '#hero';
  };

  if (errorState.hasError) {
    if (fallback) {
      return fallback;
    }

    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-surface-high border border-red-500/30 rounded-sm p-8 text-center">
          <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Algo salió mal</h2>
          <p className="text-on-surface-variant mb-6 text-sm">
            Ha ocurrido un error inesperado. Por favor, recarga la página o vuelve al inicio.
          </p>
          {errorState.error && (
            <details className="text-left bg-background p-4 rounded-sm mb-6 text-xs text-on-surface-variant/70 font-mono overflow-x-auto">
              <summary className="cursor-pointer text-on-surface-variant mb-2 font-sans font-bold">Detalles del error</summary>
              <p className="whitespace-pre-wrap">{errorState.error.message}</p>
            </details>
          )}
          <button
            onClick={handleReset}
            className="flex items-center gap-2 bg-primary-container text-on-primary-container px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;
