import { useTheme } from "@/components/theme-provider";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import feature1 from "../assets/features/feature1.png";
import feature2 from "../assets/features/feature2.png";
import feature3 from "../assets/features/feature3.png";
import { Badge } from "./ui/badge";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "회원 관리",
    description:
      "우학동이 제공하는 URL 및 QR 코드를 배포하기만 하면 동아리 신규 가입 희망자는 제공받은 URL로 이동하여 학교 구글 계정으로 로그인하고, 간단한 인적 사항을 작성하여 우학동에 회원 가입합니다. 이후 회비 납부 버튼을 통해 카카오페이로 회비를 납부하면 동아리 가입이 완료됩니다.",
    image: feature1,
  },
  {
    title: "물품 관리",
    description:
      "임원진은 우학동을 통해 간단한 물품 정보를 입력하여 물품을 등록할 수 있습니다. 회원은 동아리 전용 페이지에서 대여하고자 하는 물품을 찾은 후, 대여하기 버튼을 통해 물품을 대여할 수 있습니다. 이 과정에서 임원진과 회원은 앱에서 실시간으로 물품 대여, 반납 상황을 알 수 있습니다.",
    image: feature2,
  },
  {
    title: "회비 & 일정 관리",
    description:
      "회장 및 총무는 연동된 동아리 회비 계좌를 통해 회비 사용 내역을 업데이트할 수 있으며, 업데이트된 회비 사용 내역은 회원도 동아리 전용 페이지를 통해 확인할 수 있습니다. 또 임원진은 앱을 통해 일정 및 공지를 등록할 수 있으며, 등록하면서 이메일 전송 여부를 결정할 수 있습니다.",
    image: feature3,
  },
];

const featureList: string[] = [
  "회원 관리",
  "물품 관리",
  "회비 관리",
  "일정 관리",
  "모임 관리",
];

export const Features = () => {
  const { theme } = useTheme();

  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2
        className={`text-3xl lg:text-4xl font-bold md:text-center bg-gradient-to-br text-transparent bg-clip-text ${
          theme === "dark"
            ? "from-white  to-white/80"
            : "from-black  to-black/80"
        }`}
      >
        동아리 관리 자동화
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img src={image} alt="About feature" className="mx-auto" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
