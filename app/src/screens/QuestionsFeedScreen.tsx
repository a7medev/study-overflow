import React from 'react';
import { StyleSheet } from 'react-native';

import Screen from '../components/styled/Screen';
import Typo from '../components/styled/Typo';
import QuestionCard from '../components/QuestionCard';
import { useAppSelector } from '../store/hooks';
import { Question } from '../types/Question';

const QUESTION: Question = {
  id: 'test',
  title: 'تفاعل الحديد مع الهواء الجوي',
  content: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
  إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
  ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
  هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.`,
  views: 50,
  votes: 21,
  answersCount: 7,
};

const QuestionsFeedScreen: React.FC = () => {
  const name = useAppSelector(state => state.auth.user?.name);

  return (
    <Screen>
      <Typo variant="h1" style={styles.greeting}>
        صباح الخير{name ? `يا ${name}` : ''}!
      </Typo>

      <Typo variant="h2" style={styles.title}>
        أحدث الأسئلة
      </Typo>

      <QuestionCard question={QUESTION} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  greeting: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 15,
  },
});

export default QuestionsFeedScreen;
