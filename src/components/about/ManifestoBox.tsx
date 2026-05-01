import manifestoImg from '../../assets/images/manifesto.png';

export default function ManifestoBox() {
  return (
    <div className="manifesto-box !border-none !p-0 overflow-hidden">
      <img 
        src={manifestoImg} 
        alt="Triết lý của markAI" 
        className="w-full h-auto block"
      />
    </div>
  );
}

