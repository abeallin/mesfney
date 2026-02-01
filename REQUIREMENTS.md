# Mesfney Love Foundation (MLF) - Website Requirements

**Project Goal:** Build a responsive, informational, and functional website for the Mesfney Love Foundation (MLF) charity, serving as a hub for their mission, origin story, achievements, and fundraising efforts.

---

## 1. Organisation Identity (Extracted from Constitution & Background)

| Field                         | Value                                                                 |
| :---------------------------- | :-------------------------------------------------------------------- |
| **Legal Name**          | Mesfiney Love Fund (as per Constitution)                              |
| **Operating Name**      | Mesfney Love Foundation (MLF)                                         |
| **Registration Number** | 1139089                                                               |
| **Date Established**    | Constitution adopted July 4, 2008                                     |
| **Founder**             | Nebiat Yoseph (mother of Mesfin Hiruy)                                |
| **Address**             | 7A Fordwych Road, London, NW2 3TN                                     |
| **Contact Email**       | mesfneylove@gmail.com                                                 |
| **Legacy Email**        | mesfneylovefoundation@yahoo.com                                       |
| **Contact Phone**       | 0208 452 9312                                                         |
| **Assets**              | Logo, Constitution, Background document, Leaflet, Charity Tin graphic |

---

## 2. Origin Story (from Background PDF - for "About" page content)

Mesfin Hiruy was born on 7 December 1990. Since the age of two, he bravely fought off Leukaemia (a blood cancer). Until his final hours of his life he had endured untold pain and sufferings. Mesfin passed away on 4 October 2000.

His mother, Nebiat Yoseph, decided to help the children in Eritrea who suffer from various forms of illnesses. Together with her and Mesfin's friends, and well wishers, she is founding the charity in memory of her dearly loved and only child.

> **Key messaging for the website:**
>
> - Sick children not only need medical and hospital care, but also need a diversion from the daily suffering and pain.
> - Playing and game tools makes them feel happy and makes their life a little bit more bearable.
> - In addition to appropriate medical treatment, education and fun plays a crucial part in their healing process.
> - Such a noble initiative can only succeed with the support from individuals, businesses and organisations.

**Note:** The Background document also contains the full origin story in **Tigrinya** (page 2). This text should be used for the bilingual Mission page.

---

## 3. Constitutional Objects & Governance (from Constitution PDF)

### 3.1 Charitable Objects (Mission Statement)

The objects of the association are:

- **(a)** To promote the physical and mental well being of children in need and sick children in Eritrea.
- **(b)** To promote the education of target group by providing equipment and facilities.
- **(c)** Relief of poverty of target group.

> These three objects should form the core of the website's "Our Mission" section.

### 3.2 Powers

The association may raise funds to further its objectives. It must not undertake any substantial permanent trading activity and must comply with all relevant statutory regulations.

### 3.3 Governance Structure

| Aspect                      | Detail                                                                   |
| :-------------------------- | :----------------------------------------------------------------------- |
| **Governed by**       | Committee of trustees, elected by members                                |
| **Officer Roles**     | Chair, Treasurer, Secretary, and such other officers as deemed necessary |
| **Term of Office**    | One year, elected at AGM by separate vote                                |
| **Meeting Frequency** | Trustees meet not less than once every 3-6 months                        |
| **Quorum**            | 4 members minimum for valid general meeting                              |
| **Bank Account**      | In association's name; 3 cheque signatories required                     |
| **Accounts**          | Comply with Charities Act 2006                                           |
| **Amendment**         | Two-thirds majority of members present and voting at general meeting     |

### 3.4 Founding Signatories (July 4, 2008)

1. Ms Nebiat Yoseph
2. Ms Belainesh Araia
3. Ms Ella Yemane Haile
4. Ms Petros Berhe
5. Ms Alganesh Yemane
6. Ms Sarah Hailay
7. Ms Mebrak Ghebrweldi
8. Ms Fisseha Habte-Mariam

### 3.5 Original Officers Elected

| Role                                 | Officer              | Deputy               |
| :----------------------------------- | :------------------- | :------------------- |
| **Chairperson**                | Ms Nebiat Yoseph     | -                    |
| **Secretary**                  | Ms Belainsesh Araia  | Ms Mebrak Ghebrweldi |
| **Treasurer**                  | Ms Ella Yemane Haile | Mr Petros Berhane    |
| **Fundraising Co-coordinator** | Ms Alganesh Yemane   | Ms Sarah Hailay      |

---

## 4. Tech Stack

| Layer                | Technology                           |
| :------------------- | :----------------------------------- |
| **Framework**  | Next.js (routing, SSR, API routes)   |
| **Language**   | TypeScript                           |
| **UI Library** | React (component-based architecture) |
| **Build Tool** | Vite or Next.js integrated builder   |

---

## 5. Required Pages & Sections

### 5.1 Home Page (`/`)

- Hero section featuring charity logo, name, and tagline derived from the origin story
- Key navigation links to all sections
- Headline impact figure: **£24,694.61 raised & spent**
- Call-to-action buttons: Donate, Become a Member, Volunteer
- Registration number displayed in footer: **1139089**

### 5.2 About / Our Story (`/about`)

- **Origin story** of Mesfin Hiruy and the founding by Nebiat Yoseph (content from Background PDF, Section 2 above)
- **Constitutional mission** - the three charitable objects (Section 3.1 above)
- Bilingual support: English and **Tigrinya** text (Tigrinya content available from page 2 of Background PDF)
- Brief governance overview (trustee-led, registered charity)

### 5.3 What We Have Achieved (`/achievements`)

- Condensed summary of achievements with text and pictures
- Impact metric highlight: **20+ kids helped** with autism & down syndrome
- Timeline/cards component displaying project history (see Section 6.1)
- Financial impact summary (see Section 6.2)

### 5.4 Donate & Membership (`/donate`)

- **Single donation** option (one-time contribution)
- **Regular contribution** option (membership/recurring)
- **Membership benefits** section (monthly or annual donor benefits - to be defined)
- Complete **donation/membership form** including bank details for setup
- Compliance note: Constitution requires funds raised comply with statutory regulations (Section 3.2)

### 5.5 Volunteer / Get Involved (`/volunteer`)

- Dedicated online form inviting people to support in:
  - Fundraising
  - Publicity
  - Organising events
- Call to action: "Join the team" messaging

### 5.6 Meet the Team (`/team`)

**Current Team Members:**

| Role                  | Members              |
| :-------------------- | :------------------- |
| **Chair**       | Nebiat & Mebrak      |
| **Secretary**   | Meron & Furtuna      |
| **Finances**    | Yonas, Sara, & Feben |
| **Fundraisers** | Rahel & Yohana       |

- Call to action: Invite more people to join
- Optional: Historical founding members sec
- tion (from Constitution signatories, Section 3.4)

### 5.7 Upcoming Events (`/events`)

- Dynamically updated section for upcoming projects/fundraisers
- **Next event:** Project/fundraiser in **May 2026** (details TBA)
- Thank-you section for donors and volunteers during events

### 5.8 Contact (`/contact`)

- Email: mesfneylove@gmail.com
- Phone: 0208 452 9312
- Address: 7A Fordwych Road, London, NW2 3TN
- Contact form

### 5.9 Footer (Global)

- Charity name and registration number (1139089)
- Contact details
- Social links (if applicable)
- Copyright notice

---

## 6. Data & Content Structure

### 6.1 Previous Projects

| Year(s)               | Project / Partner                  | Achievement                                                                  |
| :-------------------- | :--------------------------------- | :--------------------------------------------------------------------------- |
| **2010**        | Inside playroom in Orota Hospital  | Built playroom (just MLF)                                                    |
| **2013**        | Partnered with Era                 | Built playground and education material for kids with Autism & Down Syndrome |
| **2017 - 2024** | Partnered with Abraha Bahter & Era | Helped deaf children; provided walking sticks, blankets, TVs                 |
| **2024**        | Boarding School Support            | Purchased a washing machine and a printer                                    |
| **2025**        | Kids' Support                      | Purchased 16 laptops for kids                                                |

### 6.2 Financial Impact

| Period                         | Amount            | Notes                                                    |
| :----------------------------- | :---------------- | :------------------------------------------------------- |
| **Total Raised & Spent** | £24,694.61       | Headline figure for the website                          |
| **2010**                 | £2,338.25 spent  | Account up to March 2011 (£5,836.69 raised)             |
| **2013 - 2024**          | £15,148.36 spent | Spent in partnership with Era                            |
| **2021**                 | £1,000 spent     | Wheelchair for autism kids during COVID (tin collection) |
| **2025**                 | £6,208 spent     | Spent on 16 laptops                                      |

---

## 7. Design & Layout Inspiration

The following charity websites were identified as liked references for layout and design:

- **KIDS** (kids.org.uk)
- **Newlife the Charity for Disabled Children** (newlifecharity.co.uk)
- **AFK - Action For Kids** (afkcharity.org)
- **ERA-UK** (era-uk.org) - MLF's partner organisation

---

## 8. Data Models (Recommended)

### 8.1 Project

```typescript
interface Project {
  id: string;
  yearStart: number;
  yearEnd?: number;
  title: string;
  partner?: string;
  achievement: string;
  images?: string[];
}
```

### 8.2 TeamMember

```typescript
interface TeamMember {
  id: string;
  name: string;
  role: 'chair' | 'secretary' | 'finances' | 'fundraiser' | 'volunteer';
  isCurrent: boolean;
  photo?: string;
}
```

### 8.3 FinancialRecord

```typescript
interface FinancialRecord {
  id: string;
  period: string;
  amountSpent: number;
  amountRaised?: number;
  notes: string;
}
```

### 8.4 Event

```typescript
interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  status: 'upcoming' | 'past';
}
```

---

## 9. Outstanding Items & Action Points

| # | Item                                                                                     | Status         |
| :- | :--------------------------------------------------------------------------------------- | :------------- |
| 1 | Extract and include Tigrinya text from Background PDF page 2 for bilingual mission page  | Pending        |
| 2 | Process logo asset from Word document (Charity Tin v2.docx)                              | Pending        |
| 3 | Confirm membership fee structure (monthly vs annual) and benefits                        | Needs input    |
| 4 | Obtain photos/images for achievements timeline                                           | Needs input    |
| 5 | Confirm payment integration approach (Stripe, GoCardless, bank transfer, etc.)           | Needs input    |
| 6 | Determine if current email (gmail) or legacy email (yahoo) or both should appear on site | Needs input    |
| 7 | Obtain details for May 2026 fundraiser event                                             | Upcoming       |
| 8 | Sketch layout based on inspiration websites                                              | Ready to start |
| 9 | Confirm social media accounts to link in footer                                          | Needs input    |

---

*This document was compiled from: `.md`, `doc.md`, `Background.pdf`, `Constitution.pdf`, and file reference `Mesfiney foundation logo Charity Tin v2.docx`.*
