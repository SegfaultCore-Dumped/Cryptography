import base64
import hashlib
from Crypto.Cipher import AES

msg = ["52", "49","46","46","64","00", "00","37","45", "42", "50"]
result = ["25","76","30","7b","11", "51","61","07", "17","70","1e"]
result_solo = "91"
i = 0
encrypt_hex = ""

for test in range (126) :
    temp = ord(chr (226)) ^ ord(chr(test))
    encrypt_hex = hex(temp) [2:].zfill (2)
    if encrypt_hex == result_solo:
        print("solo key is : ()", hex(test))
for i in range (11) :
    key = 0
    for key in range (126) :
        byte_array=bytes.fromhex (msg[1])
        ascii_array=byte_array. decode()
    temp = ord(ascii_array) ^ ord(chr(key))
    encrypt_hex = hex(temp) [2:].zfill(2)
    if encrypt_hex == result[i]:
        print ("key is ()", hex(key))