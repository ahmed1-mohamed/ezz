import {
  CountryItem,
  CurrencyItem,
  CityItem,
  AreaItem,
  AmenityItem,
  PropertyTypeItem,
  GeneralSettings,
  QuotationContentSettings,
  ContractContentSettings,
  PaymentMethodItem,
  IntegrationItem,
  PolicySettings,
  NotificationEventItem,
} from "../types";

export const INITIAL_COUNTRIES: CountryItem[] = [
  {
    id: 1,
    code: "EG",
    name: "Egypt",
    name_ar: "مصر",
    cities_count: 37,
    currency_code: "EGP",
    currency_symbol: "EGP",
  },
  {
    id: 2,
    code: "OM",
    name: "Oman",
    name_ar: "عمان",
    cities_count: 4,
    currency_code: "OMR",
    currency_symbol: "OMR",
  },
  {
    id: 3,
    code: "AE",
    name: "UAE",
    name_ar: "الإمارات",
    cities_count: 10,
    currency_code: "AED",
    currency_symbol: "AED",
  },

];

export const INITIAL_CURRENCIES: CurrencyItem[] = [
  { id: 1, code: "AED", name: "UAE Dirham", symbol: "AED", exchange_rate: 1.0, is_default: true },
  { id: 2, code: "EGP", name: "Egyptian Pound", symbol: "EGP", exchange_rate: 13.5, is_default: false },
  { id: 3, code: "OMR", name: "Omani Rial", symbol: "OMR", exchange_rate: 0.1, is_default: false },
  { id: 4, code: "SAR", name: "Saudi Riyal", symbol: "SAR", exchange_rate: 1.02, is_default: false },
  { id: 5, code: "USD", name: "US Dollar", symbol: "$", exchange_rate: 0.27, is_default: false },
];

export const INITIAL_CITIES: CityItem[] = [
  { id: 1, name: "Cairo", name_ar: "القاهرة", country_id: 1, country_name: "Egypt", areas_count: 24 },
  { id: 2, name: "Giza", name_ar: "الجيزة", country_id: 1, country_name: "Egypt", areas_count: 18 },
  { id: 3, name: "Alexandria", name_ar: "الإسكندرية", country_id: 1, country_name: "Egypt", areas_count: 15 },
  { id: 4, name: "Muscat", name_ar: "مسقط", country_id: 2, country_name: "Oman", areas_count: 8 },
  { id: 5, name: "Salalah", name_ar: "صلالة", country_id: 2, country_name: "Oman", areas_count: 4 },
  { id: 6, name: "Dubai", name_ar: "دبي", country_id: 3, country_name: "UAE", areas_count: 32 },
  { id: 7, name: "Abu Dhabi", name_ar: "أبوظبي", country_id: 3, country_name: "UAE", areas_count: 20 },
  { id: 8, name: "Sharjah", name_ar: "الشارقة", country_id: 3, country_name: "UAE", areas_count: 14 },
];

export const INITIAL_AREAS: AreaItem[] = [
  { id: 1, name: "New Cairo", name_ar: "القاهرة الجديدة", city_id: 1, city_name: "Cairo", country_name: "Egypt" },
  { id: 2, name: "Sheikh Zayed", name_ar: "الشيخ زايد", city_id: 2, city_name: "Giza", country_name: "Egypt" },
  { id: 3, name: "Downtown Dubai", name_ar: "وسط مدينة دبي", city_id: 6, city_name: "Dubai", country_name: "UAE" },
  { id: 4, name: "Dubai Marina", name_ar: "دبي مارينا", city_id: 6, city_name: "Dubai", country_name: "UAE" },
  { id: 5, name: "Business Bay", name_ar: "الخليج التجاري", city_id: 6, city_name: "Dubai", country_name: "UAE" },
  { id: 6, name: "Al Qurum", name_ar: "القرم", city_id: 4, city_name: "Muscat", country_name: "Oman" },
];

export const INITIAL_AMENITIES: AmenityItem[] = [
  { id: 1, name: "Swimming Pool", name_ar: "حمام سباحة", category: "Recreation" },
  { id: 2, name: "Gym & Fitness", name_ar: "صالة رياضية", category: "Wellness" },
  { id: 3, name: "Covered Parking", name_ar: "موقف سيارات مغطى", category: "Facilities" },
  { id: 4, name: "24/7 Security", name_ar: "أمن وحراسة 24/7", category: "Security" },
  { id: 5, name: "Balcony / Terrace", name_ar: "شرفة / تراس", category: "Interior" },
  { id: 6, name: "Central A/C", name_ar: "تكييف مركزي", category: "Interior" },
  { id: 7, name: "Children's Play Area", name_ar: "منطقة ألعاب أطفال", category: "Recreation" },
  { id: 8, name: "Concierge Service", name_ar: "خدمة كونسيرج", category: "Services" },
];

export const INITIAL_PROPERTY_TYPES: PropertyTypeItem[] = [
  { id: 1, name: "Apartment", name_ar: "شقة", code: "apartment", properties_count: 1420 },
  { id: 2, name: "Villa", name_ar: "فيلا", code: "villa", properties_count: 650 },
  { id: 3, name: "Townhouse", name_ar: "تاون هاوس", code: "townhouse", properties_count: 320 },
  { id: 4, name: "Penthouse", name_ar: "بنتهاوس", code: "penthouse", properties_count: 180 },
  { id: 5, name: "Duplex", name_ar: "دوبلكس", code: "duplex", properties_count: 240 },
  { id: 6, name: "Chalet", name_ar: "شاليه", code: "chalet", properties_count: 410 },
  { id: 7, name: "Office", name_ar: "مكتب", code: "office", properties_count: 190 },
  { id: 8, name: "Commercial Store", name_ar: "محل تجاري", code: "commercial", properties_count: 95 },
];

export const INITIAL_GENERAL_SETTINGS: GeneralSettings = {
  site_name: "Property Adviser",
  site_name_ar: "مستشار العقارات",
  site_tagline: "Your Premier Real Estate Gateway in the Middle East",
  contact_email: "support@propertyadviser.site",
  contact_phone: "+971 4 123 4567",
  whatsapp_number: "+971 50 123 4567",
  default_country: "AE",
  default_currency: "AED",
  default_language: "en",
  timezone: "Asia/Dubai",
};

export const SUGGESTED_QUOTATION_ARABIC = `شروط وأحكام عرض السعر

1) سريان العرض: هذا العرض ساري لمدة (14) يومًا من تاريخ إصداره، وتظل الأسعار الواردة به قابلة للمراجعة بعد انتهاء هذه المدة وفقًا لأسعار الشركة المعتمدة وتوافر الوحدة.
2) طبيعة العرض: يُعد هذا المستند عرض سعر استرشاديًا ولا يُنشئ التزامًا تعاقديًا بالبيع أو الحجز إلا بعد توقيع استمارة الحجز أو عقد البيع وسداد الدفعة المقررة.
3) الأسعار والعملة: جميع القيم موضحة بالعملة المذكورة بالعرض وتشمل ثمن الوحدة فقط ما لم يُنص على غير ذلك، ولا تشمل رسوم الصيانة أو التسجيل أو الضرائب أو أي مصاريف حكومية.
4) الحجز والجدية: يتم تثبيت سعر الوحدة عند سداد دفعة الحجز (الجدية)، وتُخصم هذه الدفعة من إجمالي الثمن، وتخضع لسياسة الاسترداد المعتمدة لدى الشركة.
5) خطة السداد: تُحسب الأقساط على أساس صافي الثمن بعد الخصم والمقدَّم، ويلتزم العميل بسداد الأقساط في مواعيدها المتفق عليها.
6) التسليم: يكون موعد التسليم تقديريًا وفق ما هو مبيّن بالعرض، وقد يتأثر بالظروف الخارجة عن إرادة الشركة على أن يتم إخطار العميل بأي تعديل.
7) الخصومات: أي خصم وارد بالعرض مشروط بالسداد وفق الخطة المحددة، ويسقط الحق فيه عند الإخلال بمواعيد السداد.
8) بيانات الوحدة: المساحات والمخططات والصور استرشادية وقد تخضع لفروق تنفيذية بسيطة معتادة في أعمال البناء.
9) إخلاء المسؤولية: لا تُعد أي وعود أو تعهدات شفهية جزءًا من هذا العرض، والمعتمد فقط ما ورد كتابةً بهذا المستند وبعقد البيع.`;

export const SUGGESTED_QUOTATION_ENGLISH = `Quotation Terms & Conditions

1) Validity: This quotation is valid for fourteen (14) days from its issue date. After this period, prices remain subject to review per the company's approved price list and unit availability.
2) Nature of Quotation: This document is an indicative price quotation and does not constitute a binding sales or reservation contract until a formal reservation form or purchase agreement is signed and the designated deposit is paid.
3) Prices & Currency: All amounts are stated in the indicated currency and cover the unit purchase price only unless specified otherwise. Prices do not include maintenance fees, registration fees, taxes, or any applicable municipal charges.
4) Reservation & Deposit: The unit price is locked upon payment of the reservation deposit, which is credited toward the total purchase price and governed by the company's approved refund policy.
5) Payment Schedule: Installments are calculated based on the net price after applicable discounts and down payment. The client undertakes to pay all installments on agreed due dates.
6) Handover: Estimated completion and handover dates are indicative and may be subject to force majeure or construction adjustments, with prior written notice to the client.
7) Discounts: Any promotional discount is contingent on adherence to the agreed payment schedule and may be revoked in case of default.
8) Unit Specifications: Areas, floor plans, and renderings are illustrative and subject to minor standard construction tolerances.
9) Disclaimer: Verbal promises or representations do not form part of this quotation. Only written terms in this document and the final sales agreement are legally binding.`;

export const INITIAL_QUOTATION_SETTINGS: QuotationContentSettings = {
  arabic_text: SUGGESTED_QUOTATION_ARABIC,
  english_text: SUGGESTED_QUOTATION_ENGLISH,
  header_title: "OFFICIAL PROPERTY QUOTATION",
  default_validity_days: 14,
};

export const SUGGESTED_CONTRACT_ARABIC = `الشروط والأحكام العامة لعقد البيع

أولاً: التعريفات
يُقصد بـ«البائع» الشركة/المطوّر، وبـ«المشتري» الطرف المتعاقد على شراء الوحدة، وبـ«الوحدة» العقار محل التعاقد الموضّح بيانه بصدر العقد.

ثانيًا: محل التعاقد
يقر المشتري بمعاينته للوحدة معاينة نافية للجهالة وقبوله لها بحالتها ومواصفاتها ومساحتها المبيّنة، ويُعد المخطط والمواصفات جزءًا لا يتجزأ من هذا العقد.

ثالثًا: الثمن وطريقة السداد
1. الثمن الإجمالي وخطة السداد (المقدَّم والأقساط) موضّحة بصدر العقد.
2. يلتزم المشتري بسداد كل قسط في تاريخ استحقاقه بذات وسيلة السداد المتفق عليها.
3. يُعد سداد الأقساط في مواعيدها شرطًا جوهريًا، ويستحق البائع غرامة تأخير عن كل قسط متأخر وفق النسبة المتفق عليها.

رابعًا: التزامات البائع
تنفيذ الوحدة وتسليمها بالمواصفات المتفق عليها في الموعد المحدد، مع ضمان عيوب البناء الجوهرية للمدة المقررة قانونًا.

خامسًا: التسليم والاستلام
يتم تحرير محضر استلام رسمي عند جاهزية الوحدة، ويحق للمشتري إبداء أي ملاحظات تشطيبية لمعالجتها خلال المدة المحددة.

سادسًا: فسخ العقد
في حال تخلف المشتري عن سداد قسطين متتاليين يحق للبائع فسخ العقد بعد إنذاره كتابيًا وفق الإجراءات القانونية المعتمدة.

سابعًا: الاختصاص القضائي
تختص محاكم الدولة الواقع بها العقار بالفصل في أي نزاع ينشأ عن تنفيذ أو تفسير بنود هذا العقد.`;

export const SUGGESTED_CONTRACT_ENGLISH = `General Terms & Conditions of the Sale Contract

1. Definitions
"Seller" means the company/developer; "Buyer" means the party contracting to purchase the unit; "Unit" means the property described at the head of this contract.

2. Subject of Contract
The Buyer acknowledges having inspected the unit (or its blueprints and specifications) and accepts it as described. Architectural plans and technical specs form an integral part of this contract.

3. Price and Payment Terms
1. The total price and payment plan (down payment and installments) are detailed at the head of this contract.
2. The Buyer undertakes to pay each installment on its due date using the agreed payment method.
3. Timely installment settlement is an essential term. The Seller reserves the right to apply agreed late payment fees for overdue installments.

4. Seller Obligations
To construct and deliver the unit according to approved specifications within the designated timeline, and to provide statutory structural warranties.

5. Handover
An official handover certificate shall be signed upon unit completion. The Buyer may submit snagging notes for remediation within the specified period.

6. Contract Termination
In the event of default on two consecutive installments, the Seller reserves the right to terminate the agreement following formal written notice per applicable laws.

7. Governing Law and Jurisdiction
This contract shall be governed by and construed in accordance with the laws of the jurisdiction in which the property is located.`;

export const INITIAL_CONTRACT_SETTINGS: ContractContentSettings = {
  arabic_text: SUGGESTED_CONTRACT_ARABIC,
  english_text: SUGGESTED_CONTRACT_ENGLISH,
  contract_title: "PROPERTY PURCHASE & SALE AGREEMENT",
  company_legal_name: "Property Adviser Real Estate Portal LLC",
};

export const INITIAL_PAYMENT_METHODS: PaymentMethodItem[] = [
  {
    id: "stripe",
    name: "Stripe",
    code: "stripe",
    description: "Credit / Debit cards, Apple Pay, Google Pay",
    enabled: true,
    type: "gateway",
    fields: {
      publishable_key: "pk_test_51Mz...EXAMPLE",
      secret_key: "sk_test_51Mz...EXAMPLE",
      webhook_secret: "whsec_...EXAMPLE",
      currency: "AED",
    },
  },
  {
    id: "paymob",
    name: "Paymob",
    code: "paymob",
    description: "Cards, Mobile Wallets, Meeza, Fawry",
    enabled: false,
    type: "gateway",
    fields: {
      api_key: "",
      integration_id: "",
      hmac_secret: "",
      iframe_id: "",
    },
  },
  {
    id: "paypal",
    name: "PayPal",
    code: "paypal",
    description: "PayPal Wallet and international cards",
    enabled: false,
    type: "gateway",
    fields: {
      client_id: "",
      client_secret: "",
      sandbox: "true",
    },
  },
  {
    id: "bank_transfer",
    name: "Bank Transfer",
    code: "bank_transfer",
    description: "Direct bank wire deposit with transfer slip upload",
    enabled: false,
    type: "manual",
    fields: {
      bank_name: "Emirates NBD",
      account_name: "Property Adviser Real Estate LLC",
      iban: "AE070260000123456789012",
      swift: "EBILAEADXXX",
      instructions: "Please include your Quotation / Contract number in the transfer description.",
    },
  },
  {
    id: "instapay",
    name: "InstaPay",
    code: "instapay",
    description: "Instant bank-to-bank transfer via Egyptian Central Bank network",
    enabled: false,
    type: "manual",
    fields: {
      instapay_address: "propertyadviser@instapay",
      mobile_number: "+20 100 123 4567",
      account_name: "Property Adviser Egypt",
    },
  },
  {
    id: "pay_at_office",
    name: "Pay at Office",
    code: "pay_at_office",
    description: "Cash / Card payment directly at our authorized branch office",
    enabled: false,
    type: "manual",
    fields: {
      office_address: "Level 14, Boulevard Plaza Tower 1, Downtown Dubai, UAE",
      working_hours: "Sunday – Thursday, 9:00 AM – 6:00 PM",
      contact_phone: "+971 4 123 4567",
    },
  },
];

export const INITIAL_INTEGRATIONS: IntegrationItem[] = [
  {
    id: "twilio_sms",
    name: "Twilio — SMS",
    description: "Cloud communications platform for sending automated SMS and OTP alerts",
    enabled: true,
    status: "connected",
    fields: {
      account_sid: "AC2ced3cfef91e97804ec42f6b1f4004d7",
      auth_token: "••••••••",
      sender_number: "+18458510609",
    },
  },
  {
    id: "whatsapp_cloud",
    name: "WhatsApp (Cloud API)",
    description: "Official Meta Cloud API for automated client chats and lead assignment alerts",
    enabled: false,
    status: "disconnected",
    fields: {
      phone_number_id: "",
      waba_id: "",
      access_token: "",
      webhook_verify_token: "",
    },
  },
  {
    id: "sendgrid_email",
    name: "SendGrid — Email",
    description: "Reliable transactional email delivery service for quotations and contracts",
    enabled: true,
    status: "connected",
    fields: {
      api_key: "SG.e83912984kjasd98123EXAMPLE",
      from_email: "noreply@propertyadviser.site",
      from_name: "Property Adviser",
    },
  },
  {
    id: "facebook_lead_ads",
    name: "Facebook Lead Ads",
    description: "Sync incoming leads from Meta Ads campaigns directly into the CRM",
    enabled: false,
    status: "disconnected",
    fields: {
      app_id: "",
      app_secret: "",
      page_access_token: "",
    },
  },
  {
    id: "agora_video",
    name: "Agora — Video calls",
    description: "Real-time HD audio and video calling engine for virtual client meetings",
    enabled: false,
    status: "disconnected",
    fields: {
      app_id: "",
      app_certificate: "",
    },
  },
  {
    id: "google_analytics",
    name: "Google Analytics",
    description: "Web traffic analytics and user engagement tracking",
    enabled: false,
    status: "disconnected",
    fields: {
      measurement_id: "G-XXXXXXXXXX",
      api_secret: "",
    },
  },
  {
    id: "microsoft_clarity",
    name: "Microsoft Clarity",
    description: "Behavior analytics tool with heatmaps and session replays",
    enabled: false,
    status: "disconnected",
    fields: {
      project_id: "",
    },
  },
];

export const INITIAL_NOTIFICATION_EVENTS: NotificationEventItem[] = [
  {
    id: "new_signup",
    title: "New signup",
    title_ar: "تسجيل مستخدم جديد",
    description: "When a new user registers",
    description_ar: "عند تسجيل مستخدم جديد في المنصة",
    template: "{name} just created a new account.",
    template_ar: "قام {name} بإنشاء حساب جديد للتو.",
    enabled: true,
    channel: "bell",
  },
  {
    id: "new_message",
    title: "New message",
    title_ar: "رسالة جديدة",
    description: "When a client sends a message",
    description_ar: "عندما يرسل عميل رسالة جديدة",
    template: "{name} sent a message: {message}",
    template_ar: "أرسل {name} رسالة: {message}",
    enabled: true,
    channel: "bell",
  },
  {
    id: "developer_application",
    title: "Developer application",
    title_ar: "طلب انضمام مطور",
    description: "When a developer application is submitted",
    description_ar: "عند تقديم طلب انضمام جديد كمطور عقاري",
    template: "{name} applied to join as a developer.",
    template_ar: "قدم {name} طلب انضمام كمطور عقاري.",
    enabled: true,
    channel: "bell",
  },
  {
    id: "developer_approved",
    title: "Developer approved",
    title_ar: "اعتماد المطور",
    description: "Sent to a developer when approved",
    description_ar: "يُرسل للمطور عند قبول واعتماد حسابه",
    template: "Your developer account has been approved. You can now manage projects and add properties.",
    template_ar: "تمت الموافقة على حساب المطور الخاص بك. يمكنك الآن إدارة المشاريع وإضافة الوحدات.",
    enabled: true,
    channel: "bell",
  },
  {
    id: "credit_order",
    title: "Credit order",
    title_ar: "طلب باقة رصيد",
    description: "When a developer orders a credit package",
    description_ar: "عندما يطلب مطور شراء باقة رصيد إعلانات",
    template: '{name} ordered the "{package}" package ({credits} credits).',
    template_ar: 'طلب {name} باقة "{package}" ({credits} نقطة).',
    enabled: true,
    channel: "bell",
  },
  {
    id: "credits_granted",
    title: "Credits granted",
    title_ar: "إيداع الرصيد",
    description: "Sent to a developer when granted credits",
    description_ar: "يُرسل للمطور عند إضافة رصيد لحسابه",
    template: "{credits} credits were added to your balance by the team.",
    template_ar: "تمت إضافة {credits} نقطة إلى رصيد حسابك من قبل فريق العمل.",
    enabled: true,
    channel: "bell",
  },
  {
    id: "credit_paid",
    title: "Credit paid",
    title_ar: "تأكيد سداد الرصيد",
    description: "Sent to a developer when a payment is confirmed",
    description_ar: "يُرسل للمطور عند تأكيد نجاح عملية السداد",
    template: "Payment of {amount} for {credits} credits has been confirmed.",
    template_ar: "تم تأكيد سداد مبلغ {amount} لشراء {credits} نقطة رصيد بنجاح.",
    enabled: true,
    channel: "bell",
  },
  {
    id: "email_welcome",
    title: "Welcome Email",
    title_ar: "بريد الترحيب بالمستخدم",
    description: "Sent to user upon successful registration",
    description_ar: "يُرسل للمستخدم فور اكتمال التسجيل",
    email_subject: "Welcome to Property Adviser!",
    template: "Hello {name}, welcome to Property Adviser portal. Your account is now active and ready.",
    template_ar: "مرحبًا {name}، أهلاً بك في منصة مستشار العقارات. تم تفعيل حسابك بنجاح.",
    enabled: true,
    channel: "email",
  },
  {
    id: "email_quotation",
    title: "Quotation Delivery Email",
    title_ar: "بريد تسليم عرض السعر",
    description: "Sent to client with official PDF quotation attached",
    description_ar: "يُرسل للعميل مع ملف عرض السعر PDF المعتمد",
    email_subject: "Official Property Quotation #{quotation_id}",
    template: "Dear {name}, please find attached the quotation for {property_name}. This quotation is valid for 14 days.",
    template_ar: "عزيزي {name}، مرفق لكم عرض السعر الرسمي لعقار {property_name}. العرض ساري لمدة 14 يومًا.",
    enabled: true,
    channel: "email",
  },
  {
    id: "email_developer_approved",
    title: "Developer Approval Email",
    title_ar: "بريد اعتماد المطور",
    description: "Sent to developer when their application is approved",
    description_ar: "يُرسل للمطور عند قبول طلبه الرسمي",
    email_subject: "Your Developer Account is Approved!",
    template: "Dear {name}, your developer portal access has been granted. You can now publish projects and units.",
    template_ar: "عزيزي {name}، تمت الموافقة على حسابكم كمطور رسمي. يمكنكم الآن نشر المشاريع والوحدات.",
    enabled: true,
    channel: "email",
  },
];

export const INITIAL_POLICIES: PolicySettings = {
  privacy_policy_en:
    "Property Adviser respects your privacy. We collect personal contact details solely to deliver requested real estate services, investment guidance, and property updates. We do not sell or lease your personal information to third parties without your explicit consent.",
  privacy_policy_ar:
    "تحترم منصة مستشار العقارات خصوصيتك. نقوم بجمع البيانات الشخصية بغرض تقديم الخدمات العقارية المطلوبة، والتوجيه الاستثماري، وتحديثات المشروعات. نلتزم بعدم بيع أو مشاركة بياناتك الشخصية مع أي أطراف ثالثة دون موافقتك الصريحة.",
  terms_of_service_en:
    "By accessing and using the Property Adviser portal, users agree to provide accurate information and refrain from unauthorized distribution of property data. All listings and market data are subject to verified developer confirmation.",
  terms_of_service_ar:
    "باستخدامك لمنصة مستشار العقارات، فإنك توافق على تقديم معلومات صحيحة ودقيقة، والامتناع عن أي استخدام أو إعادة نشر غير مصرح به لبيانات العقارات. تخضع كافة العروض وتفاصيل الأسعار لتأكيد المطورين المعتمدين.",
  refund_policy:
    "Reservation deposit refundability is subject to the developer's designated cooling-off cancellation policy stated in the reservation form.",
  cookie_policy:
    "We use essential cookies to maintain secure sessions and performance cookies to optimize your browsing experience.",
};