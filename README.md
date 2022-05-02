messages = pd.read_csv('data/spam-ham.csv', delimiter=',\t', names=['label', 'sms'], engine='python')

#The string that you want to check
messages_real = pd.read_csv('data/spam-real.csv', names=['sms'])
