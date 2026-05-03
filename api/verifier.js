export default async function handler(req, res) {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).json({ valide: false, motif: 'vide' });
  }

  const url = `https://script.google.com/macros/s/AKfycbyDAnKi3iEoDErIkqOYepNOJmJOeoCr348D3B0gq7TJOdoamdoqIy4ayJEn7B-kSMQ/exec?code=${code}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ valide: false, motif: 'erreur_serveur' });
  }
}
