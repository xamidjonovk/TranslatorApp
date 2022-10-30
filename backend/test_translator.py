# pip install googletrans==3.1.0a0
from googletrans import Translator
translator = Translator()
translation = translator.translate('Salom hammaga, qalaysizlar?',dest='en')
print(translation.text)