# Concrete-Algorithm-UI-Project
적산온도 기반 콘크리트 압축강도 추정 알고리즘 &amp; UI
# 목적 & 필요성

- **목적**

콘크리트 시공현장에서 실시간 온도기록과 콘크리트 압축 강도**(F28)** 기준 도달에 도움이 되고자 서비스 개발

- **필요성**

시공업체가 감리사에게 제출하는 공사관리 일지를 수기로 작성하는 **‘불편함’** 공사관리 일지의 **‘신뢰성’** 확보

---

## 개발과정 및 구조

![Untitled (9)](https://user-images.githubusercontent.com/67450169/191556220-80ec9d3e-dfa8-4b3a-a4ca-6a090435b04e.png)


---

## 기대효과 및 활용 방안 **6**가지

![Untitled (10)](https://user-images.githubusercontent.com/67450169/191556236-fbb4015c-bd36-489c-a29f-38600ee46aa5.png)

---

# 이론

![Untitled (11)](https://user-images.githubusercontent.com/67450169/191556250-a0b5d19a-1bb2-46c5-a8ee-3e1c95bd1000.png)

---

## 적산온도 산정식

![Untitled (12)](https://user-images.githubusercontent.com/67450169/191556262-6226114a-2963-4797-a211-1043e2f2e947.png)
---

## 적산온도 기반 강도추정 계산 공식

![Untitled (13)](https://user-images.githubusercontent.com/67450169/191556278-828c8f4a-da0c-4a7b-9472-3b6f51ac7486.png)
![Untitled (14)](https://user-images.githubusercontent.com/67450169/191556289-230f9374-3f61-4d4e-95d8-8623da7eb611.png)
---
![Untitled (15)](https://user-images.githubusercontent.com/67450169/191556309-e85ccbaa-f26f-4622-a18c-60874ce20e4c.png)
# 알고리즘

### 주요함수

![Untitled (16)](https://user-images.githubusercontent.com/67450169/191556327-0bc383bb-2239-4031-a670-29dd67dd6214.png)

---

### Str(request)

- **요청을 받고 응답값(강도값)을 return**

![Untitled (17)](https://user-images.githubusercontent.com/67450169/191556336-fb20053a-b646-4087-9297-c7bcbd15723a.png)

---

### OPEN API

![Untitled (18)](https://user-images.githubusercontent.com/67450169/191556354-a159fb06-95ec-4143-b2e2-ba0cf746ae67.png)

---

### get_ch(ch_name)

- **sensor_mac 과 device_mac을 구함**
- 

![Untitled (19)](https://user-images.githubusercontent.com/67450169/191556366-79aabe73-c3a3-4a7a-b164-76996a30f799.png)

---

### get_avg(usertime, device_mac, sensor_mac)

- **일 평균 온도 계산**

![Untitled (20)](https://user-images.githubusercontent.com/67450169/191556382-6848b0ee-bbd0-4581-b8fd-9426ae16fe95.png)

### 날짜 측정

- **센서 측정 마지막시간 - 사용자 선택시간**

![Untitled (21)](https://user-images.githubusercontent.com/67450169/191556391-b2df4d15-0382-4d91-b6d5-d30bd1cfee3e.png)

![Untitled (22)](https://user-images.githubusercontent.com/67450169/191556398-d1fb742a-4e1a-458d-a32f-538772605ef3.png)

---

### 프레임 병합

- **일평균 온도 & 총 측정 일수 return**

![Untitled (23)](https://user-images.githubusercontent.com/67450169/191556415-92960bcd-a288-4a70-b5ca-815e026f8511.png)

---

## Maturity(i, day_avg, day)

- **7,14,28,90일 적산온도 계산**
- 

![Untitled (24)](https://user-images.githubusercontent.com/67450169/191556430-ce7bf544-d528-4f21-9d61-456a3bf32c50.png)

---

## Strength(maturity, model, wc)

- **적산온도 & 모델 & 물시멘트비율로 추정강도 계산**

![Untitled (25)](https://user-images.githubusercontent.com/67450169/191556440-683ea49d-7f62-4866-9fa5-d90250acd6cb.png)

---

# UI

## 추정강도 7,14,28,90일
![Untitled (26)](https://user-images.githubusercontent.com/67450169/191556455-ddfac5f9-6e6e-43eb-b4a2-229e353376a3.png)
