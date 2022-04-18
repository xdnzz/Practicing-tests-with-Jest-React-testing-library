import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Contador component', () => {
  test('Deve renderizar o numero 0', () => {
    render(<App />);
    const linkElement = screen.getByText('0');
    expect(linkElement).toBeInTheDocument();
  });

  // test('Deve conter a classe ', () => {
  //   render(<App />);
  //   const linkElement = screen.getByText('0');
  //   expect(linkElement).toHaveClass('black');
  // });

  test('Deve iniciar sem classe', () => {
    render(<App />);
    const linkElement = screen.getByText('0');
    expect(linkElement).not.toHaveClass('azul');
    expect(linkElement).not.toHaveClass('vermelho');
  });

  test('Deve ter um botão de aumentar número', () => {
    render(<App />);
    const contentButton = screen.getByRole('button', { name: /Adicionar/i });
    expect(contentButton).toBeInTheDocument();

  });

  
  test('Deve ter um botão de diminuir número', () => {
    render(<App />);
    const contentButton = screen.getByRole('button', { name: /Remover/i });
    expect(contentButton).toBeInTheDocument();

  });

  test('Botão de aumentar: Deve iniciar com uma classe', () => {
    render(<App />);
    const contentButton = screen.getByRole('button', { name: /Adicionar/i });
    expect(contentButton).toHaveClass('botaoAumentar')

  });

  test('Botão de diminuir: Deve iniciar com uma classe', () => {
    render(<App />);
    const contentButton = screen.getByRole('button', { name: /Remover/i });
    expect(contentButton).toHaveClass('botaoDiminuir')

  });


  test('Deve incrementar 1 ao clicar no botão Aumentar', () => {
    render(<App />);
    const contentButton = screen.getByRole('button', { name: /Adicionar/i });
    expect(screen.queryByText('1')).toBeNull()
    userEvent.click(contentButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('Deve decrementar 1 ao clicar no botão Diminuir', () => {
    render(<App />);
    const contentButton = screen.getByRole('button', { name: /Remover/i });
    expect(screen.queryByText('-1')).toBeNull()
    userEvent.click(contentButton);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });


  test('Deve adicionar a classe azul quando o valor for maior que 0', () => {
    render(<App />);
    const contentButton = screen.getByRole('button', { name: /Adicionar/i });
    expect(screen.queryByText('0')).not.toHaveClass('azul')
    userEvent.click(contentButton);
    expect(screen.getByText('1')).toHaveClass('azul');
  });
  
  test('Deve adicionar a classe vermelho quando o valor for menor que 0', () => {
    render(<App />);
    const contentButton = screen.getByRole('button', { name: /Remover/i });
    expect(screen.queryByText('0')).not.toHaveClass('vermelho')
    userEvent.click(contentButton);
    expect(screen.getByText('-1')).toHaveClass('vermelho');
  });
})