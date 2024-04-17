import { IframeVideo } from "../IframeVideo";

export function EvidenceVideos() {
  return (
    <div
      className="grid  place-items-center   
    lg:grid-cols-2 md:grid-cols-2     
    gap-y-4 md:gap-y-14 
    md:gap-x-20
    lg:pt-24 md:pt-16 pt-10 
    "
    >
      <IframeVideo
        width="351"
        height="197"
        src="https://www.youtube.com/embed/TcntdQn9eyc"
        title="Gizelly Oliveira || Experiência Inglês para Viagem"
      />

      <IframeVideo
        width="351"
        height="197"
        src="https://www.youtube.com/embed/HU1k8L0SvYE"
        title="Paula Priscila || Experiência Inglês para Viagem"
      />

      <IframeVideo
        width="351"
        height="197"
        src="https://www.youtube.com/embed/NzJRku5F6zE"
        title="Geovanne Laureano || Experiência Curso Teacher Murilo 1.0 ⚠️"
      />

      <IframeVideo
        width="351"
        height="197"
        src="https://www.youtube.com/embed/fxD2SlmyTP4"
        title="Josiele Schultz || Experiência Inglês para Viagem"
      />
    </div>
  );
}
