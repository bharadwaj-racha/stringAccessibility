import { useState } from 'react';
import { stringCalculator } from './stringCalculator';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum = stringCalculator(input);
      setResult(sum);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#fff',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: 'auto',
      }}>
      <header>
        <h1>String Calculator</h1>
      </header>

      <img
        src='https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop'
        alt='Calculator illustration'
        width={600}
        height={400}
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />

      <section aria-labelledby='calc-label'>
        <h2 id='calc-label'>Enter numbers to calculate their sum</h2>

        <label htmlFor='numbers' style={{ display: 'block', marginTop: '1rem' }}>
          Numbers (use commas, newlines, or custom delimiters like //;\n1;2;3)
        </label>

        <textarea
          id='numbers'
          aria-describedby='input-help'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='e.g. 1,2,3 or //;\n1;2;3'
          rows={5}
          style={{
            width: '100%',
            marginTop: '8px',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />

        <p id='input-help' style={{ fontSize: '14px', color: '#555' }}>
          Press "Calculate" to see the result.
        </p>

        <button
          onClick={handleCalculate}
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 16px',
            fontSize: '16px',
            cursor: 'pointer',
          }}>
          Calculate
        </button>
      </section>

      {result !== null && (
        <p style={{ color: 'green', fontWeight: 'bold', marginTop: '1rem' }}>
          Result: {result}
        </p>
      )}

      {error && (
        <div
          role='alert'
          aria-live='assertive'
          style={{ color: 'red', marginTop: '1rem' }}>
          {error}
        </div>
      )}
    </main>
  );
};

export default App;
