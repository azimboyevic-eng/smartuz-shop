// Настройки сайта. Ключ anon — публичный (его и так видит браузер); права режет RLS в базе.
// Ключ service_role сюда НИКОГДА не класть — он только у бота в «Отчёты Смартфоны/_bot_config.json».
window.SHOP_CFG = {
  supabaseUrl: 'https://ehcxzutopatkxiwxpirb.supabase.co',
  supabaseAnon: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoY3h6dXRvcGF0a3hpd3hwaXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE1MjA0ODUsImV4cCI6MjEwNzA5NjQ4NX0.i6ZjBY3aMN8rUbgHUQSAyFQYW-dl4RDaCaQNodpIqLU',
  schema: 'shop',       // таблицы магазина в отдельной схеме проекта «SmartUz — магазин смартфонов»
  bot: 'SmartMarketuzBot'
};
