pip install openai
npm install openai@^4.0.0
Authorization: Bearer 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
import os
import openai
openai.organization = "org-5F0BWdqymiaisPxHGxoZYSY7"
openai.api_key = os.getenv("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")
openai.Model.list()
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $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" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }
'{
    "id": "chatcmpl-abc123",
    "object": "chat.completion",
    "created": 1677858242,
    "model": "gpt-3.5-turbo-0613",
    "usage": {
        "prompt_tokens": 13,
        "completion_tokens": 7,
        "total_tokens": 20
    },
    "choices": [
        {
            "message": {
                "role": "assistant",
                "content": "\n\nThis is a test!"
            },
            "finish_reason": "stop",
            "index": 0
        }
    ]
}

